import React, { use, useEffect, useRef, useState } from "react";
import bot from "public/bot.png";
import Image from "next/image";

type AnswerProp = {
  answer: string;
  displayedText: string;
};

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Answers = ({ answer, displayedText }: AnswerProp) => {
  // const cursorRef = useRef<null | HTMLSpanElement>(null);

  // useEffect(() => {
  //   cursorRef?.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //   });
  // }, [displayedText]);

  return (
    <div className="group relative example w-full max-w-[50em] h-full bg-white px-3 py-3  shadow-xl rounded-xl z-30">
      <div className="absolute bottom-0 z-50 hidden md:block">
        <div
          className={`relative group-hover:translate-x-[-9.5rem] transition duration-700 ${
            answer && "lg:translate-x-[-9.5rem]"
          }`}
        >
          <Image src={bot} alt="bot" className={`w-[10rem]  `} />
          <div
            className={`bot-chat absolute whitespace-nowrap z-50 -top-[3.5rem] left-0 w-fit p-4 text-xs bg-white rounded-full shadow-md hidden opacity-0 group-hover:flex group-hover:opacity-100 transition duration-1000 ${
              answer && "flex opacity-100"
            }`}
          >
            Oops! my bad, go ahead.
          </div>
          {!answer && (
            <div
              className={`bot-chat absolute whitespace-nowrap -top-[3rem] left-6 w-fit p-3 text-xs bg-white rounded-full shadow-md z-[100] group-hover:hidden`}
            >
              Damn shawty!
            </div>
          )}
          {answer && (
            <div
              className={`bot-chat absolute whitespace-nowrap -top-[3.5rem] left-0 w-fit p-4 text-xs bg-white rounded-full shadow-md z-[100] group-hover:hidden`}
            >
              Oops! my bad, go ahead.
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full gap-5 items-center justify-center relative mb-4 z-[30]">
        <div className="flex absolute left-3 items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#fa85a4]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffe56e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#52e282]"></span>
        </div>
        <p className="text-white py-1 sm:px-5 px-2 sm:text-base text-xs rounded-full bg-[#7214ff]">
          Your answer
        </p>
      </div>
      <div className="answer bg-[#f8f9fd] relative w-[99%] h-[14.5em] overflow-y-auto sm:h-[16em] md:h-[19em] mx-auto px-4 py-2 rounded-lg z-[20]">
        <div className="flex mt-[.1rem] absolute max-h-fit overflow-hidden w-fit flex-col items-center">
          {numbers.map((number) => (
            <span key={number} className="text-[#b3b8d0] lg:text-lg">
              {number}
            </span>
          ))}
        </div>
        {!answer && (
          <span
            // ref={cursorRef}
            className="cursor ml-10"
          >
            ^
          </span>
        )}
        {answer && (
          <p className="ml-10 leading-8 text-lg lg:text-xl font-medium text-[#090426ae] typing-effect">
            {displayedText}
          </p>
        )}
      </div>
    </div>
  );
};

export default Answers;
