"use client";

import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import copy from "copy-to-clipboard";
import Link from "next/link";
import CircularProgress from '@mui/material/CircularProgress';


const Page = () => {
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false)
  const [dataLoading, setDataLoading] = useState(false)


  const handleClick = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      console.log("Loading", loading);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  const handleDataClick = () => {
    setDataLoading(true)
    setShowData(true)
    const timer = setTimeout(() => {
      setDataLoading(false)
    }, 2000);

    return () => clearTimeout(timer);
  }

  const handleOverlay = () => {
    setShowData(prev => !prev)
  }



  return (
    <div className="bg-[#EFF5F5] w-full h-screen  flex flex-col items-center mx-auto">
      

      {/* <Link href="/start">
        <button className="bg-[#0EA5E9] mr-10 px-4 py-2 text-white font-bold">Get to Start</button>
      </Link> */}

      {showData && <div className="absolute top-0 right-0 bg-[rgba(0,0,0,.5)] w-full h-screen flex items-center justify-center">

        {dataLoading ? <CircularProgress /> : (
          <div className=" example w-[20em] sm:w-[30em] lg:w-[40em]   h-[20em] bg-white lg:shadow-lg shadow-md rounded-lg overflow-scroll mb-10 py-4 px-8 z-20">
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

            <div className="flex flex-col items-start justify-start  mb-4">
              <h1 className="text-xl font-bold">UserImage</h1>
              {/* <Image src={} alt="userImage" /> */}
              <h1>Brad Pitt</h1>
            </div>

            <div className="flex flex-col gap-2 text-2xl ">
              <ul>
                <li>Haste makes waste.</li>
                <li>Actions speak louder than words.</li>
                <li>Look before you leap.</li>
                <li>Don't put all your eggs in one basket.</li>
                <li>The early bird gets the worm.</li>
              </ul>
            </div>
          </div>
        )}

      </div>
      }

    </div>
  );
};

export default Page;





