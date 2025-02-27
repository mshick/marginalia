---
title: Markdown
date: 2024-06-20T09:17:00.000Z
featured: true
cover:
  image: image.png
excerpt: Super **cool** things you can do with _markdown_!
tags:
  - markdown
  - make/it/safe
related:
  - /posts/tufte-css/
---

:+1:

DEMO MATERIAL! NOT MINE!!

gatsby-theme-terminal supports the full set of
[markdown shortcodes](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Heading

```markdown
# h1

## h2

### h3

#### h4

##### h5

###### h6

Alternatively, for h1 and h2, an underline-ish style:

# Alt-h1

Alt-h2
```

# h1

## h2

### h3

#### h4

##### h5

###### h6

Alternatively, for h1 and h2, an underline-ish style:

## [Alt-h1](#alt-h1)

Alt-h2

## [Emphasis](#emphasis)

```markdown
Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## [Lists](#lists)

(In this example, leading and trailing spaces are shown with with dots: ⋅)

```markdown
1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number
4. And another item.
5. Code in list `boop`

- Unordered list can use asterisks

* Or minuses

- Or pluses
```

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number
4. And another item.
5. Code in list `boop`

- Unordered list can use asterisks
- Or minuses
- Or pluses

## [Links](#links)

There are two ways to create links.

```markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../../README.md)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com and sometimes example.com (but not on Github, for
example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link](https://www.mozilla.org)

[I'm a relative reference to a repository file](../../README.md)

[You can use numbers for reference-style link definitions](http://slashdot.org)

Or leave it empty and use the [link text itself](http://www.reddit.com).

URLs will automatically get turned into links. http://www.example.com and
sometimes example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

## [Images](#images)

```markdown
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2")

## [Code and Syntax Highlighting](#code-and-syntax-highlighting)

Code blocks are part of the Markdown spec, but syntax highlighting isn't.

```markdown
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks `, or are
indented with four spaces. I recommend only using the fenced code blocks --
they're easier and only they support syntax highlighting, but you must provide a
language or none

````md
```javascript
// file.js

var s = "JavaScript syntax highlighting"
alert(s)
```

```ts
// file.ts

var s: SType = "JavaScript syntax highlighting"
alert(s)
```

`file.json`

```json
{
  "message": "json syntax highlighting"
}
```

```python
# file.py

s = "Python syntax highlighting"
print s
```

```html
<!-- file.html -->

<div>HTML syntax highlighting</div>
```

```
var s = "JavaScript syntax highlighting"
alert(s)
```
````

```javascript
// file.js

var s = "JavaScript syntax highlighting"
alert(s)
```

```ts
// file.ts

var s: SType = "JavaScript syntax highlighting"
console.log(s)
```

`file.json`

```json
{
  "message": "json syntax highlighting"
}
```

```python
# file.py

s = "Python syntax highlighting"
print s
```

```html
<!-- file.html -->

<div>HTML syntax highlighting</div>
```

```
var s = "JavaScript syntax highlighting"
alert(s)
```

## [Tables](#tables)

Tables aren't part of the core Markdown spec, but they are part of GFM and
Markdown Here supports them. They are an easy way of adding tables to your email
-- a task that would otherwise require copy-pasting from another application.

```markdown
Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|)
are optional, and you don't need to make the raw Markdown line up prettily. You
can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |
```

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| :------------ | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|)
are optional, and you don't need to make the raw Markdown line up prettily. You
can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

## [Blockquotes](#blockquotes)

```markdown
> Blockquotes are very handy in email to emulate reply text. This line is part
> of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh
> boy let's keep writing to make sure this is long enough to actually wrap for
> everyone. Oh, you can _put_ **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text. This line is part
> of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh
> boy let's keep writing to make sure this is long enough to actually wrap for
> everyone. Oh, you can _put_ **Markdown** into a blockquote.

## [Inline HTML](#inline-html)

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

```markdown
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does \\*not\\* work \\*\\*very\\*\\* well. Use HTML <em>tags</em>.</dd>
</dl>

## [Horizontal Rule](#horizontal-rule)

```markdown
Three or more...

---

Hyphens

---

Asterisks

---

Underscores
```

Three or more...

---

Hyphens

---

Asterisks

---

Underscores

## [Line Breaks](#line-breaks)

My basic recommendation for learning how line breaks work is to experiment and
discover -- hit `<Enter>` once (i.e., insert one newline), then hit it twice
(i.e., insert two new lines), see what happens. You'll soon learn to get what
you want. "Markdown Toggle" is your friend.

```markdown
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a
_separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a
single newline, so it's a separate line in the _same paragraph_.
```
