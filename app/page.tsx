"use client";

import Image from "next/image";
import Link from "next/link";
import bot from "public/bot.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  // const transitionRef = useRef<null | HTMLInputElement>(null);

  // const handleScroll = () => {
  //   transitionRef!.current!.style.transform = `translateY(-200vh)`;
  // };



  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div
      // ref={transitionRef}
      className="flex flex-col relative transition-all duration-500 ease-linear"
    >
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: "50%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mt-20 mt-20 flex flex-col items-center justify-center sm:gap-10 gap-6 relative px-10"
      >
        <div className="flex z-[20] flex-col items-center justify-center text-center gap-2 max-w-[58em] ">
          <p className="text-[#6804fd] font-semibold text-lg tracking-widest uppercase">
            What your tweets tell about you
          </p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-semibold lg:font-bold lg:leading-[3.3rem] leading-8">
            Where even your most ridiculous tweets can reveal hidden truths{" "}
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-xl max-w-2xl text-[#2b2854]">
            Our website analyzes your Twitter activity to provide you with
            accurate and relevant responses to your queries.
          </p>
        </div>

        <Link
          href="/play"
          // onClick={handleScroll}
          className="noOutline-btn bg-[#7214ff] z-[20] text-white sm:py-3 py-2 text-lg hover:bg-[#7214ffe4] transition duration-300 px-6 rounded-full font-semibold"
        >
          Try it out
        </Link>

        <div className="group relative example w-full max-w-[40em] h-fit bg-white px-3 py-3 shadow-xl rounded-xl z-[10] flex flex-col">
          <div className="absolute bottom-0 z-50 hidden md:block">
            <div
              className={`relative group-hover:translate-x-[-9.5rem] transition duration-700`}
            >
              <Image src={bot} alt="bot" className={`w-[10rem]`} />
              <div
                className={`bot-chat absolute whitespace-nowrap z-50 -top-[3rem] left-0 w-fit p-4 text-[.8rem] bg-white rounded-full shadow-md hidden opacity-0 group-hover:flex group-hover:opacity-100 transition duration-1000`}
              >
                Oops! my bad, go ahead.
              </div>
              <div
                className={`bot-chat  absolute whitespace-nowrap -top-[3rem] left-1 min-w-[8rem] p-4 text-[.8rem] bg-white rounded-full shadow-md z-[100] group-hover:hidden`}
              >
                TweetSage is awesome!
              </div>
            </div>
          </div>
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
          <div className="bg-[#f8f9fd] h-[18rem] sm:h-[22rem] px-4 py-2 rounded-lg z-[20] overflow-y-scroll">
            <div className="flex  absolute max-h-fit overflow-hidden w-fit flex-col items-center">
              {numbers.map((number) => (
                <span key={number} className="text-[#b3b8d0] lg:text-lg">
                  {number}
                </span>
              ))}
            </div>
            <div className="ml-10 leading-8 text-lg lg:text-xl text-[#09042687]" >
              <span className="text-[#fa85a4]">{`<html>`}</span>
              <p className="pl-4 flex flex-col">
                <span className="text-[#1463FF] text-lg">{`<text>`}</span>
                <span className="pl-4 text-[16px] leading-5">
                  We will first analyze your tweets then generate an answer to your question based on those tweets
                </span>
                <span className="text-[#1463FF] text-lg">{`</text>`}</span>
              </p>
              <p className="pl-4 flex flex-col">
                <span className="text-[#7214FF] text-lg">{`<code>`}</span>
                <span className="pl-4 text-[16px] leading-5">
                  We are using chatGPT to analyze your tweets. Only works if you are an active user on twitter
                </span>
                <span className="text-[#7214FF] text-lg">{`</code>`}</span>
              </p>

              <span className="text-[#fa85a4]">{`<html>`}</span>
            </div>
          </div>
        </div>

        {/* <Image src={boba5} alt="bobo" className=" w-[30rem]" /> */}
      </motion.div>
    </div>
  );
};

export default page;
