import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../public/logo2.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0  w-full flex items-center justify-between text-white px-5  lg:px-20 py-6">
      <Link href="/" className="flex items-center justify-center gap-5">
        <Image className="w-[8em] sm:w-[12em]" src={Logo} alt="logo" />
      </Link>
      <Link href="https://github.com/Aadarsh805/TweetSage.ai">
        <div className="gap-2 inline-flex items-center justify-center h-10 px-2 py-3 text-xs bg-transparent text-white border-2 border-[#0904268e] rounded-md">
          <GitHubIcon className="text-xl sm:text-2xl text-[#090426db] w-7 h-7" />
          <span className="h-6 w-[1px] bg-[#090426ad]"></span>
          <span className="uppercase font-semibold sm:text-sm text-[#090426] text-xs">
            Star us
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
