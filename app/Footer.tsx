import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Faqs from "./Faqs";
import { Tooltip } from "@mui/material";

// #f7f9fc
const Footer = () => {
  return (
    <div className="bg-[#f7f9fc] w-full flex flex-col md:flex-row md:justify-between md:px-8 items-center justify-center gap-3 py-4 md:py-6 mt-12 mb-6 text-[#535479] rounded-lg max-w-[65em]">
      <Faqs />
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
        <p>
          UI by{" "}
          <Link
            target="_blank"
            className="text-[#7214ff]"
            href="https://formcarry.com"
          >
            Form Carry
          </Link>
        </p>
        <p>Open Source</p>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-6 text-[#6c6f93]">
        <Tooltip title="Twitter" placement="top">
          <Link target="_blank" href="https://twitter.com/Aadarsh805">
            <TwitterIcon className="text-2xl cursor-pointer  md:text-[32px]" />
          </Link>
        </Tooltip>
        <Tooltip title="Linkedin" placement="top">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/aadarsh-thakur-090a31227/"
          >
            <LinkedInIcon className="text-2xl cursor-pointer  md:text-[32px]" />
          </Link>
        </Tooltip>
        <Tooltip title="Github" placement="top">
          <Link
            target="_blank"
            href="https://github.com/Aadarsh805/TweetSage.ai"
          >
            <GitHubIcon className="text-2xl cursor-pointer md:text-[32px]" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Footer;
