---
title: Static Sites with Next.js 9.3 and Prisma
date: 2024-07-20T09:17:00.000Z
excerpt:
  Learn how to build & deploy a static site using Next.js, Prisma, and a SQLite
  database.
featured: true
tags:
  - next.js
  - prisma
---

DEMO MATERIAL! NOT MINE!

Static sites are all the rage – and for a good reason. They have many benefits:

- Globally scalable
- Cheaper by hosting static files
- Faster performance by serving cached assets from a CDN
- No need to worry about server or database vulnerabilities
- Better developer experience – no complicated deployment process

Let's learn how to build a static site with Next.js and Prisma.

> Note: This post is also available in
> [Korean](https://velog.io/@sirl/Next.js-9.3%EA%B3%BC-Prisma%EB%A1%9C-%EC%A0%95%EC%A0%81-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0).

## Next.js 9.3

Before 9.3, [Next.js](https://nextjs.org/) was mostly used for server-side
rendered (SSR) React apps. It solved a few common issues with most client-side
rendered (CSR) React apps, including search engine optimization (SEO), routing,
and code splitting. There was only one issue. SSR requires, well... a server.
This limits your deployment options and increases costs. That's where Next.js
9.3 came in.

With the release of 9.3, Next.js is now a complete static-site generator (SSG).
Using two new Next.js functions `getStaticProps` and `getStaticPaths`, we can
take _dynamic_ data and build **static** sites. Incredible!

Here's the special sauce: `getStaticProps` is only ran at build time – it's not
even included in the browser JS bundle. That means you can write server-side
code directly, including direct database queries. Enter Prisma.

## Prisma

[Prisma](https://www.prisma.io/) makes database access easy. With auto-generated
and type-safe queries based on your database schema, it's easier than ever to
manage your data. Whether you have an existing database or you're starting from
scratch, Prisma has you covered. It currently supports MySQL, SQLite, and
Postgres. For this tutorial, I'll be using SQLite.

When combining Prisma with Next.js 9.3, you can skip the create/update/delete
API boilerplate and directly query the database. Less code means less bugs.

## Getting Started

Okay, enough talking. Let's build an app! Here's the
[final result](https://prisma-next.now.sh/).

- The entire site is static and can be hosted anywhere
- Data is read from the database at build time
- Pages are dynamically built (e.g., `/songs/[id]`)

![Next.js and Prisma](./image.png)

Before continuing, you'll need to have [Node.js](https://nodejs.org/en/)
(version 10 or higher) installed on your machine.

## Download Starter

To save you time, I've already configured the Prisma schema and database we'll
need for this tutorial. Don't worry, I'll explain them! First, clone the
repository and install the dependencies.

```bash
$ git clone https://github.com/leerob/next-prisma-starter.git
$ cd next-prisma-starter
$ yarn
```

This includes a few important files.

- `prisma/schema.prisma`:
  [Prisma schema file](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/prisma-schema-file)
  defining your models
- `prisma/dev.db`: A SQLite database file containing song/artist data

## Prisma Schema & Database

Let's take a look at our database schema.

We have two models: `Song` and `Artist`. A `Song` includes some necessary
information like the `name` as well as a relation to an `Artist`. For the sake
of this example, a `Song` can only have one `Artist`.

```graphql
datasource db {
  provider = "sqlite"
  url      = "file:dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Song {
  id            Int     @default(autoincrement()) @id
  name          String
  artist        Artist? @relation(fields: [artistId], references: [id])
  artistId      Int?
}

model Artist {
  id    Int     @default(autoincrement()) @id
  name  String  @unique
  songs Song[]
}
```

I've pre-populated the `dev.db` with some songs and artists.

| id                |      name       |   artist   | artistId |
| :---------------- | :-------------: | :--------: | -------: |
| NJ                | Chelsea Cutler  | `[Artist]` |        1 |
| Take It Easy      |    Surfaces     | `[Artist]` |        2 |
| always, i'll care |  Jeremy Zucker  | `[Artist]` |        3 |
| Heartless         |   The Weeknd    | `[Artist]` |        4 |
| Daphne Blue       | The Band CAMINO | `[Artist]` |        5 |

## Querying Data

We have a database and some sample data. Let's build a landing page to display
all of the songs. Navigate to `pages/index.js`. This is the entry point of your
application.

This file sets up the boilerplate for `getStaticProps` to allow us to query the
database for our songs. Then, we iterate over our results and display them as a
list.

```jsx
export async function getStaticProps() {
  return {
    props: {
      songs: [
        {
          id: 1,
          name: "Test Song"
        }
      ]
    }
  }
}

export const HomePage = ({ songs }) => (
  <ul>
    {songs.map((song) => (
      <li key={song.id}>{song.name}</li>
    ))}
  </ul>
)

export default HomePage
```

Next, let's get some real data on the screen. After adding the Prisma client, we
can fetch all songs using `findMany`. One of the best features of Prisma is how
simple it makes working with relations. We can retrieve the corresponding
`Artist` for the `Song` using `include`.

```jsx {1,4,5,6,7}:pages/index.js
import { PrismaClient } from "@prisma/client"

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const songs = await prisma.song.findMany({
    include: { artist: true }
  })

  return {
    props: {
      songs
    }
  }
}

export const HomePage = ({ songs }) => (
  <ul>
    {songs.map((song) => (
      <li key={song.id}>{song.name}</li>
    ))}
  </ul>
)

export default HomePage
```

When Next.js compiles your page, it will query the database and display all the
songs as a list. Static site, dynamic data!

## Database Migrations & Editing Data

A list of songs is great, but what if we want more? Let's say we want to include
the music video on YouTube for each song. This will require changes to the
database. Don't worry – Prisma has you covered 😎

[Prisma Migrate](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate)
is a tool that lets you change your database schema, e.g. by creating new tables
or adding columns to existing tables. These changes are called _schema
migrations_.

Prisma Migrate generates `.sql` migration files which you can apply to your
database.

Let's add some new fields to our schema.

```sql {13,14}:prisma/schema.prisma
datasource db {
  provider = "sqlite"
  url      = "file:dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Song {
  id            Int     @default(autoincrement()) @id
  name          String
  youtubeId     String?
  albumCoverUrl String?
  artist        Artist? @relation(fields: [artistId], references: [id])
  artistId      Int?
}

model Artist {
  id    Int     @default(autoincrement()) @id
  name  String  @unique
  songs Song[]
}
```

Let's create and run the migration:

```bash
$ npx prisma migrate dev --preview-feature
```

This creates a `migration.sql` file and runs it against your database. Finally,
we need to update our Prisma Client API (`node_modules/@prisma/client`) to
recognize the new changes.

```bash
$ npx prisma generate
```

![Prisma Flow](./img.png)

**That's it!** You now have two new fields available on the `Song` model. Now,
let's update our database and populate those values. There's a variety of ways
to do this:

1. Good ol' fashioned SQL commands
1. Run a Node.js script invoking the Prisma client
1. Use a visual editor to modify the database

I don't know about you, but #3 seems the easiest to me. Luckily, Prisma has
another fancy tool called Prisma Studio that allows us to do just that.

```bash
$ npx prisma studio --experimental
```

![Prisma Studio](./image.png)

For convenience, I've added these commands as scripts in the `package.json`
already.

```json
{
  "scripts": {
    "db": "prisma studio --experimental",
    "db-save": "prisma migrate save --experimental",
    "db-up": "prisma migrate up --experimental",
    "generate": "prisma generate"
  }
}
```

## Dynamic Routes

Now that we know each song's YouTube video, let's create a page for each song.
Using Next.js, we can use brackets to denote a dynamic route (e.g.,
`pages/songs/[id].js`)

Once again, I've included the page boilerplate to use `getStaticPaths` and
`getStaticProps`. Try navigating to `/songs/1` in your browser. You should see a
YouTube video.

```jsx
export async function getStaticProps({ params }) {
  return {
    props: {
      song: {
        youtubeId: "N6SQ9QoSjCI"
      }
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1"
        }
      }
    ],
    fallback: false
  }
}

const HomePage = ({ song }) => (
  <iframe
    width="100%"
    height="315"
    src={`https://www.youtube.com/embed/${song.youtubeId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
)

export default HomePage
```

Now, let's hook this up to real data.

- `getStaticProps` will query song data for the given `id`
- `getStaticPaths` will generate a page for each song in the database

```jsx {1,4,5,6,7,8,9,10,14,20,21,24,25,26,27}:pages/songs/[id].js
import { PrismaClient } from "@prisma/client"

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient()
  const song = await prisma.song.findOne({
    include: { artist: true },
    where: {
      id: Number(params.id)
    }
  })

  return {
    props: {
      song
    }
  }
}

export async function getStaticPaths() {
  const prisma = new PrismaClient()
  const songs = await prisma.song.findMany()

  return {
    paths: songs.map((song) => ({
      params: {
        id: song.id.toString()
      }
    })),
    fallback: false
  }
}

const HomePage = ({ song }) => (
  <iframe
    width="100%"
    height="315"
    src={`https://www.youtube.com/embed/${song.youtubeId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
)

export default HomePage
```

Try going to `/songs/4` – we're now pulling from the database!

## Deployment

Deploying static sites couldn't be easier with [Vercel](https://vercel.com).
After installing the Vercel CLI, simply run `vercel` in the root of the project.

```bash
$ vercel
```

**That's it**.

## Conclusion

Next.js 9.3 and Prisma are a fantastic combo. The combination of dynamic data
and static sites result in an incredible user experience.

To see the completed tutorial code with styles added, check out my
[next-prisma](https://github.com/leerob/next-prisma) repo. If you prefer video
form, you can watch me create this application during a
[Prisma Day workshop](https://prisma.zoom.us/rec/share/6PwuN4zqyn9Of4XE-kvOUbUeF7i7T6a81yYbr_RZxEaE6v9ctLqFon6y4vLj2lxn).
