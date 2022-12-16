import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../public/logo2.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="absolute z-50 top-0  w-full flex items-center justify-between text-white   md:px-40 py-4 ">
      <div className="flex items-center justify-center gap-5">
        <Image className="w-full" src={Logo} alt="logo" />
      </div>
      <Link href="https://github.com/Aadarsh805/TweetSage.ai">
        <div className="gap-2 inline-flex items-center justify-center h-10 px-2 py-3 text-xs bg-transparent text-white border-2 border-[#090426] rounded-md">
          <GitHubIcon className="lg:text-3xl text-[#090426] w-7 h-7" />
          <span className="h-6 w-[.1rem] bg-[#090426]"></span>
          <span className="uppercase font-semibold text-[.9rem] text-[#090426] text-xs ">
            Star us
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;