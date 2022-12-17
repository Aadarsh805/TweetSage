import React, { useEffect, useRef } from "react";
import bgImage from "public/bg-curve.png";

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
    <div className="example w-full max-w-[50em] h-fit bg-white px-3 py-3 shadow-xl rounded-xl overflow-y-scroll z-30">
      <div className="flex w-full gap-5 items-center justify-center relative mb-4 z-[30]">
        <div className="flex absolute left-3 items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#fa85a4]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffe56e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#52e282]"></span>
        </div>
        <p className="text-white py-1 px-5 rounded-full bg-[#7214ff]">
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
            |
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
