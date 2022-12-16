"use client";

import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import bgImage from 'public/bg-curve.png'
import Answers from "./Answers";
import Example from "./Example";
import Form from "./Form";
import Slogan from './Slogan'

const page = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-10 mt-40 bg-white relative px-10">
        {/* <Image src={bgImage} alt="bg-image" className="w-full absolute z-100" /> */}
        <div className="flex z-[20] flex-col items-center justify-center text-center gap-2 max-w-[48em] ">
          <p className="text-[#6804fd] font-semibold">Setup, easy peasy</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:font-semibold font-bold leading-[2.3rem]">Where even your most ridiculous tweets can reveal hidden truths{" "}</h1>
          <p className="text-[14px] md:text-[16px] lg:text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, soluta veniam. Facilis incidunt temporibus iure velit culpa. Ipsa, autem quo!</p>
        </div>

        <button className="bg-[#1956f3] z-[20] text-white py-2 px-5 rounded-full font-semibold ">
          Get Started
        </button>
        <Image src={bgImage} alt="curve-image" className=" w-[70rem] min-w-[65rem] absolute top-[18em] sm:top-[14em] md:top-[15em] right-2/4 translate-x-[50%] z-[0]  " />
        <div className="example w-full  max-w-[40em]  h-[19em] sm:h-[20em] md:h-[21em] bg-white px-3 py-3 shadow-xl rounded-xl z-[10] overflow-y-scroll">

          <div className="flex w-full gap-5 items-center mb-4 z-[30] ml-2 lg:ml-5">
            <div className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fa85a4]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffe56e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#52e282]"></span>
            </div>
            <p className="text-white py-1 px-7 rounded-full bg-[#7214ff]">Guide</p>
          </div>
          <div className="bg-[#f8f9fd] w-[99%]  h-[14.5em] sm:h-[16em] md:h-[17em] mx-auto px-4 py-2 rounded-lg z-[20]  ">
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>

        {/* <Image src={boba5} alt="bobo" className=" w-[30rem]" /> */}
      </div>

      <div className="mt-[12em] mb-[2em] h-screen w-full  flex flex-col px-5 items-center justify-center relative">
        <div>
          <Slogan />
        </div>
        <div className="w-full flex items-center justify-center">
          <Form />

        </div>
        <div className=" w-full mb-4">
          <Example />
        </div>
        <div className="w-full flex items-center justify-center">
          <Answers />
        </div>
      </div>

    </div>
  );
};

export default page;


{/* <p className="text-black">Setup, easy peasy</p>
<h1 className="font-extrabold text-4xl  lg:text-5xl leading-[1em] text-black">
  Where even your most ridiculous tweets can reveal hidden truths{" "}
</h1>
<p className="text-[#758297] w-full  lg:w-[40em] text-md lg:text-xl ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, soluta veniam. Facilis incidunt temporibus iure velit culpa. Ipsa, autem quo!
</p>
<Link href="/about">
  <button className="bg-[#0EA5E9] py-2 px-5 rounded-md font-semibold ">
    Get Started
  </button>
</Link> */}

// sm:w-[26em] md:w-[32em] lg:w-[34em]  sm:h-[17em] md:h-[18em] lg:h-[20em]

// sm:w-[23.5em] md:w-[30em] lg:w-[32em] sm:h-[13em] md:h-[14em] lg:h-[16em]