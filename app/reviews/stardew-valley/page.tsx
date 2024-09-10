import { readFile } from "node:fs/promises";

export default async function StardewValleyPage() {
  const text = readFile('./content/reviews/stardew-valley.md', 'utf8')

  return (
    <>
      <h1>StardewValley</h1>
      <img src="/images/stardew.png" alt="" width='640' height='360' className="rounded mb-2"/>
      <p>
        {text}
      </p>
    </>
  );
}
