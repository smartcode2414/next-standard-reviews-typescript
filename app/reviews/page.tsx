import Image from "next/image";
import Heading from "@/components/Heading";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border w-80 rounded hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img src="/images/hollow.jpg" alt="" width='320' height='180' className="rounded-t mb-2"/>
              <h2 className="text-center font-sans font-semibold">
                Hollow Knight
              </h2>
          </Link>
        </li>

        <li className="bg-white border w-80 rounded hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img src="/images/stardew.png" alt="" width='320' height='180' className="rounded mb-2"/>
            <h2 className="text-center font-sans font-semibold">
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}

//asfdasdasd
