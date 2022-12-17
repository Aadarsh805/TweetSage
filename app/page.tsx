"use client";

import Link from "next/link";

const page = () => {
  // const transitionRef = useRef<null | HTMLInputElement>(null);

  // const handleScroll = () => {
  //   transitionRef!.current!.style.transform = `translateY(-200vh)`;
  // };

  return (
    <div
      // ref={transitionRef}
      className="flex flex-col relative transition-all duration-500 ease-linear h-screen gap-[100vh]"
    >
      <div className="sm:mt-24 mt-20 flex flex-col items-center justify-center sm:gap-10 gap-6 relative px-10">
        <div className="flex z-[20] flex-col items-center justify-center text-center gap-2 max-w-[48em] ">
          <p className="text-[#6804fd] font-semibold">Setup, easy peasy</p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-semibold lg:font-bold lg:leading-[3.3rem] leading-8">
            Where even your most ridiculous tweets can reveal hidden truths{" "}
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[17px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            soluta veniam. Facilis incidunt temporibus iure velit culpa. Ipsa,
            autem quo!
          </p>
        </div>

        <Link
          href="/play"
          // onClick={handleScroll}
          className="bg-[#1956f3] z-[20] text-white sm:py-3 py-2 text-lg hover:bg-[#1957f3ca] transition duration-300 px-6 rounded-full font-semibold lg:mb-8"
        >
          Try it out
        </Link>

        <div className="example w-full max-w-[40em] h-fit bg-white px-3 py-3 shadow-xl rounded-xl z-[10] overflow-y-scroll flex flex-col">
          <div className="flex w-full relative gap-5 items-center justify-center sm:mb-4 mb-2 z-[30]">
            <div className="flex absolute left-2 items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fa85a4]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffe56e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#52e282]"></span>
            </div>
            <p className="text-white py-1 px-5 text-xs sm:text-base rounded-full bg-[#7214ff]">
              Guide
            </p>
          </div>
          <div className="bg-[#f8f9fd] h-[18rem] sm:h-[22rem] px-4 py-2 rounded-lg z-[20]">
            {/*  */}
          </div>
        </div>

        {/* <Image src={boba5} alt="bobo" className=" w-[30rem]" /> */}
      </div>
    </div>
  );
};

export default page;

{
  /* <p className="text-black">Setup, easy peasy</p>
<h1 className="font-extrabold text-4xl  lg:text-5xl leading-[1em] text-black">
  Where even your most ridiculous tweets can reveal hidden truths{" "}
</h1>
<p className="text-[#758297] w-full  lg:w-[40em] text-md lg:text-xl ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, soluta veniam. Facilis incidunt temporibus iure velit culpa. Ipsa, autem quo!
</p>
<Link href="/about">
  <button className="bg-[#0EA5E9] py-2 px-5 rounded-md font-semibold ">
    Get Started
  </button>
</Link> */
}

// sm:w-[26em] md:w-[32em] lg:w-[34em]  sm:h-[17em] md:h-[18em] lg:h-[20em]

// sm:w-[23.5em] md:w-[30em] lg:w-[32em] sm:h-[13em] md:h-[14em] lg:h-[16em]
