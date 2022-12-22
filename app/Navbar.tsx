import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../public/logo2.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed bg-white z-50 top-0  w-full flex items-center justify-between text-white px-5  lg:px-20 py-6 shadow-sm">
      <Link
        href="/"
        className="noOutline-btn flex items-center justify-center gap-5 outline-none"
      >
        <Image className=" w-[8em] sm:w-[12em]" src={Logo} alt="logo" />
      </Link>
      <Link
        target="_blank"
        href="https://github.com/Aadarsh805/TweetSage.ai"
        className="outline-none noOutline-btn"
      >
        <div className="flex justify-center">
            <button className="hidden items-center mx-2 rounded-md bg-blue-500 p-2 font-medium lg:hidden">
          <TwitterIcon/>
          Login with Twitter
        </button>
        <div className="gap-2 inline-flex items-center justify-center h-10 px-2 py-3 text-xs bg-transparent text-white border-2 border-[#0904268e] rounded-md outline-none">
          <GitHubIcon className="text-xl sm:text-2xl text-[#090426db] w-7 h-7" />
          <span className="h-6 w-[1px] bg-[#090426ad]"></span>
          <span className="uppercase font-semibold sm:text-sm text-[#090426] text-xs">
            Star us
          </span>
        </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
