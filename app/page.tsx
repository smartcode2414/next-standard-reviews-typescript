'use client';
import { useEffect } from "react";
import Heading from "@/components/Heading";
import Link from "next/link";
export default function HomePage() {
  
  console.log('Homepage is rendering'); 
  return (
    <>
      <Heading>IndieGamer</Heading>
      <p className="pb-3">
        Only the best indie games, reviewed, for you.
      </p>
      <div className="bg-white border w-80 rounded hover:shadow-xl sm:w-full">
          <Link href="/reviews/stardew-valley"
            className="flex flex-col sm:flex-row"
          >
            <img src="/images/stardew.png" alt="" width='320' height='180' className="rounded-t sm:rounded-r-none sm:rounded-l "/>
            <h2 className="text-center font-sans font-semibold py-1 sm:px-2">
              Stardew Valley
            </h2>
          </Link>
        </div>
    </>
  );
}