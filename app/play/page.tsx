"use client";

import { useState } from "react";
import Answers from "./Answers";
import Example from "./Example";
import Form from "./Form";
import Slogan from "./Slogan";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";

const page = () => {
  const [answer, setAnswer] = useState<string>("");
  const [displayedText, setDisplayedText] = useState("");

  return (
    <div className="mira-parent second-page mt-32 px-6 gap-12 sm:gap-20 w-full flex flex-col items-center justify-center relative z-30">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: "50%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mira flex flex-col items-center z-[31] w-full gap-12 sm:gap-20 "
      >
        <Slogan />
        <Form
          answer={answer}
          setAnswer={setAnswer}
          displayedText={displayedText}
          setDisplayedText={setDisplayedText}
        />
      </motion.div>
      <Example />
      <Answers answer={answer} displayedText={displayedText} />

      {/* <div
    role="button"
    onClick={() => {
      transitionRef!.current!.style.transform = `translateY(0)`;
    }}
    className="absolute lg:bottom-0 bottom-[2em] hidden lg:flex right-28 w-12 h-12 rounded-full shadow-2xl transition duration-300 hover:bg-[#7214fff1] bg-[#7214ff] items-center justify-center z-50"
  >
    <ArrowUpwardIcon className="text-white" />
  </div> */}
    </div>
  );
};

export default page;
