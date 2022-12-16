import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <div className="relative  overflow-hidden bg-[#FEFCF3]">
      <nav className="absolute w-full flex items-center justify-between text-white p-10">
        <div className="flex items-center justify-center gap-5">
          {/* <span className='bg-[red] w-10'>logo</span> */}
          <h2 className="font-bold text-2xl tracking-wider text-[#0EA5E9]">
            Tweet Sage
          </h2>
        </div>
        <div>
          <span className="text-black">Github Link</span>
        </div>
      </nav>

      <div className="z-10 text-black flex flex-col items-center justify-center h-screen w-[78em] mx-auto text-center gap-6 lg:w-[78em] md:w-[60em] sm:w-[50em]">
        <h1 className="font-extrabold text-7xl leading-[1em]">
          Where even your most ridiculous tweets can reveal hidden truths{" "}
        </h1>
        <p className="text-slate-400 w-[44em] text-xl">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.{" "}
        </p>
        <Link href="/about">
          <button className="bg-[#0EA5E9] py-2 px-5 rounded-md font-semibold ">
            Get Started
          </button>
        </Link>
        {/* <button className='bg-[#0EA5E9] py-2 px-5 rounded-md font-semibold '>Get Started</button> */}
      </div>
    </div>
  );
};

export default page;
