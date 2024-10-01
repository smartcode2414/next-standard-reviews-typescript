/* eslint-disable @next/next/no-img-element */

import Heading from "@/components/Heading";
import { getReview } from "@/lib/review";

export default async function ReviewPage({params: {slug}}) {
  const review = await getReview(slug);
  return (
    <>
    <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <img src={review.image} alt="" width='640' height='360' className="rounded mb-2" />
      <article dangerouslySetInnerHTML={{ __html: review.body }} className="max-w-screen-sm prose prose-slate"></article>
    </>
  );
}
