/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { marked } from "marked";

export default async function StardewValleyPage() {
  const text = readFile('./content/reviews/stardew-valley.md', 'utf8')
  const html = marked(await text, { headerIds: false, mangle: false });

  return (
    <>
      <h1>StardewValley</h1>
      <img src="/images/stardew.png" alt="" width='640' height='360' className="rounded mb-2" />
      <article dangerouslySetInnerHTML={{__html: html}}></article>
      <p>
        {html}
      </p>
    </>
  );
}
