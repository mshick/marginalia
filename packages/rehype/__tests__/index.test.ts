import { resolve } from "node:path";
import { html } from "js-beautify";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { readSync } from "to-vfile";
import { unified } from "unified";
import { expect, test } from "vitest";
import preset from "../src/index.js";

test("the preset works", async () => {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(preset())
    .process(readSync(resolve(__dirname, "./example.md")));

  expect(html(String(processed))).toMatchSnapshot();
});
