"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CloseIcon from '@mui/icons-material/Close';
import copy from "copy-to-clipboard";
import Link from "next/link";

const exampleQuestion = [
  "Tell me about the person",
  "Tell me 5 jokes on that person",
  "How will u describe the person above",
  "Tell something about the person in a sentence",
];
const Page = () => {
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false)


  const handleClick = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      console.log("Loading", loading);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  const handleDataClick = () => {
    setShowData(true)
  }

  const handleOverlay = () => {
    setShowData(false)
  }


  
  return (
    <div onClick={handleOverlay} className="bg-[#fff8fb] w-full h-screen  flex flex-col items-center mx-auto">
      <div className="text-center my-20 flex flex-col item-center gap-2">
        {/* <h4 className='font-bold text-[#0EA5E9] text-xl tracking-wider'>Tweet Sage</h4> */}
        <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold  w-[13em] sm:w-[14em] md:w-[15em] lg:w-[17em] text-[#932F6D]">
          Tweet Sage: Because your tweets deserve some sage advice.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20 items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center w-[20em] mb-20">
          <p className="text-xl sm:text-2xl mb-8 font-semibold">
            What do you want to know about the person?
          </p>
          <div className="flex flex-col  item-center gap-2 justify-center w-full">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <button
              onClick={handleClick}
              className="bg-[#0EA5E9] py-2 px-10 font-bold text-white "
            >
              Get Tweets
            </button>
            {loading && <p>loading...</p>}
          </div>
          <div className="mt-5 flex flex-col w-full gap-2">
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter your question"
            />
            <button onClick={e => {
              e.stopPropagation()
              handleDataClick()
              }} className="bg-[#0EA5E9] mr-10 w-full py-2 text-white font-bold ">
              Get Data
            </button>
          </div>
        </div>


        <div className="">
          <h2 className="font-semibold text-lg">Try these questions:</h2>
          <div className=" example bg-white lg:shadow-lg shadow-md w-[20em] h-[8em] mb-10 pt-3 pb-1 px-4  overflow-scroll lg:overflow-visible lg:h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-4 rounded-full bg-[#C884A6]"></span>
              <span className="w-4 h-4 rounded-full bg-[#FFE74C]"></span>
              <span className="w-4 h-4 rounded-full bg-[#81F495]"></span>
            </div>

            <div className=" mt-2 ">
              <Examples />
            </div>
          </div>
        </div>
      </div>
      <Link href="/start">
        <button className="bg-[#0EA5E9] mr-10 px-4 py-2 text-white font-bold">Get to Start</button>
      </Link>

      {showData && <div  className="absolute top-0 right-0 bg-[rgba(0,0,0,.5)] w-full h-screen flex items-center justify-center">
        <div className=" bg-white lg:shadow-lg shadow-md lg:max-w-[40em] w-[22em] md:w-[30em] mb-10 py-4 px-4 z-20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center  gap-2 ">
              <span className="w-4 h-4 rounded-full bg-[#C884A6]"></span>
              <span className="w-4 h-4 rounded-full bg-[#FFE74C]"></span>
              <span className="w-4 h-4 rounded-full bg-[#81F495]"></span>
            </div>
            <div>
              <CloseIcon onClick={handleOverlay} className="cursor-pointer" />

            </div>

          </div>
          <div>
            {/* <p>"Haste makes waste."</p>
            <p>"Actions speak louder than words."</p>
            <p>"Look before you leap."</p>
            <p>"Don't put all your eggs in one basket."</p>
            <p>"The early bird gets the worm."</p> */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id dolores deserunt, illum ipsum, tenetur eum quod reprehenderit qui neque laborum perspiciatis fugiat amet? Assumenda enim harum ab repellat similique dolores culpa deleniti, voluptate, ad, expedita vitae obcaecati? Voluptates, enim saepe? Odio voluptate vitae reprehenderit enim neque possimus ad veniam libero nobis fuga. Est omnis non vel repellendus temporibus eveniet dolor aliquam ab dolorem soluta aspernatur sunt tempora nulla sed totam tempore autem reiciendis repellat corporis eaque, quia placeat, rem laborum? Soluta ipsam doloribus veniam molestias atque eos placeat impedit officiis esse aliquam libero necessitatibus, ullam non. Asperiores, voluptatem unde.
          </div>
        </div>
      </div>}

    </div>
  );
};

export default Page;


const Examples: FC = () => {
  return (
    <div>
      {exampleQuestion.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 mb-5 py-2 px-3"
        >
          <p>{item}</p>
          <div
            className="relative group"
            onClick={() => navigator.clipboard.writeText(item)}
          >
            <span className="copied z-20 rounded-md absolute p-1 -top-8 -right-10 bg-black text-white text-xs hidden group-active:block">
              copied
            </span>
            <ContentPasteIcon className="cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};
