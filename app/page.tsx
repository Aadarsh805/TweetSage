"use client";

import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import bgImage from "public/bg-curve.png";
import Answers from "./Answers";
import Example from "./Example";
import Form from "./Form";
import Slogan from "./Slogan";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import gif from "public/gif.gif"

const page = () => {
  const [answer, setAnswer] = useState<string>("");
  const [displayedText, setDisplayedText] = useState("");

  const transitionRef = useRef<null | HTMLInputElement>(null);

  const handleScroll = () => {
    transitionRef!.current!.style.transform = `translateY(-200vh)`;
  };

  return (
    <>
      <Image
        src={bgImage}
        alt="curve-image"
        className="w-[70rem] min-w-[65rem] absolute top-[68%] lg:top-[72%] right-2/4 translate-x-[50%] translate-y-[-50%] -z-[5]  "
      />
      <div
        ref={transitionRef}
        className="flex  flex-col relative transition-all duration-500 ease-linear h-screen gap-[100vh]"
      >
        <div className="mt-24 flex flex-col items-center justify-center gap-10 relative px-10">
          <div className="flex z-[20] flex-col items-center justify-center text-center gap-2 max-w-[48em] ">
            <p className="text-[#6804fd] font-semibold">Setup, easy peasy</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:font-semibold font-bold leading-[2.3rem]">
              Where even your most ridiculous tweets can reveal hidden truths{" "}
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[17px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
              soluta veniam. Facilis incidunt temporibus iure velit culpa. Ipsa,
              autem quo!
            </p>

          </div>

          <button
            onClick={handleScroll}
            className="bg-[#1956f3] z-[20] text-white py-3 text-lg hover:bg-[#1957f3ca] transition duration-300 px-5 rounded-full font-semibold lg:mb-8"
          >
            Get Started
          </button>

          <div className="example w-full max-w-[40em] h-[20rem] sm:h-[22rem] bg-white px-3 py-3 shadow-xl rounded-xl z-[10] overflow-y-scroll">
            <div className="flex w-full relative gap-5 items-center justify-center mb-4 z-[30]">
              <div className="flex absolute left-2 items-center justify-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#fa85a4]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffe56e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#52e282]"></span>
              </div>
              <p className="text-white py-1 px-5 rounded-full bg-[#7214ff]">
                Guide
              </p>
            </div>
            <div className="bg-[#f8f9fd] sm:h-[17.5rem] h-full px-4 py-2 rounded-lg z-[20]  ">
              <div className=" w-full h-full">
                {/* <video autoPlay muted className="z-50 h-full w-full "  controls={true}>
                  <source src="../public/gif.mp4" type="video/mp4"  />
                  abcd
                </video> */}
                {/* <Image src={gif} alt='guide-gif' className="w-[200%] z-50 h-full" /> */}
                
              </div>
            </div>
          </div>

          {/* <Image src={boba5} alt="bobo" className=" w-[30rem]" /> */}
        </div>

        <div className=" second-page sm:mt-[18em] mt-[18em] md:mt-80 lg:mt-60   px-3  w-full flex flex-col items-center justify-center relative z-30">
          <div className="flex flex-col items-center z-30 w-full ">
            <Slogan />
            <Form
              answer={answer}
              setAnswer={setAnswer}
              displayedText={displayedText}
              setDisplayedText={setDisplayedText}
            />
          </div>
          <Example />
          <Answers answer={answer} displayedText={displayedText} />

          <div
            role="button"
            onClick={() => {
              transitionRef!.current!.style.transform = `translateY(0)`;
            }}
            className="absolute lg:bottom-0 bottom-[-2em]  right-10 w-12 h-12 rounded-full shadow-2xl transition duration-300 hover:bg-[#7214fff1] bg-[#7214ff] flex items-center justify-center z-50"
          >
            <ArrowUpwardIcon className="text-white" />
          </div>
        </div>
      </div>
    </>
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
