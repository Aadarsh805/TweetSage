"use client";

import Link from "next/link";
import React from "react";
import Page from "../about/page";
import Navbar from "../Navbar";
import boba from 'public/boba.png'
import boba2 from 'public/boba2.png'
import boba3 from 'public/boba501.png'
import boba4 from 'public/boba502.png'
import boba5 from 'public/boba501.png'
import Image from "next/image";
import bgImage from 'public/bgImg.jpg'
const page = () => {
  return (
    <div className=" overflow-hidden   mt-20  w-full flex items-center h-[80vh]  justify-between px-40">
      {/* <Image src={bgImage} alt="bg-image" className="w-full absolute z-100" /> */}
      <div className="z-40  text-white flex mb-20 flex-col items-start   w-[60em] gap-6">
        <h1 className="font-extrabold text-4xl  lg:text-5xl leading-[1em] text-black">
          Where even your most ridiculous tweets can reveal hidden truths{" "}
        </h1>
        <p className="text-[#758297] w-full  lg:w-[40em] text-md lg:text-xl ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, soluta veniam. Facilis incidunt temporibus iure velit culpa. Ipsa, autem quo!
        </p>
        <Link href="/about">
          <button className="bg-[#0EA5E9] py-2 px-5 rounded-md font-semibold ">
            Get Started
          </button>
        </Link>
      </div>

      <Image src={boba5} alt="bobo" className=" w-[30rem]" />

      {/* <Page /> */}
    </div>
  );
};

export default page;
