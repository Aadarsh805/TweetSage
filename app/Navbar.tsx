import Link from 'next/link'
import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
    return (
        <nav className="absolute z-50 top-0  w-full flex items-center justify-between text-white   md:px-40 py-4 ">
            <div className="flex items-center justify-center gap-5">
                <h2 className="font-bold text-lg tracking-wider text-[#0EA5E9] cursor-pointer md:text-2xl lg:text-3xl">
                    Tweet Sage
                </h2>
            </div>
            <Link href="https://github.com/Aadarsh805/metaTweet.ai">
                <div className="gap-2 inline-flex items-center justify-center h-10 px-3 py-6 text-xs bg-transparent text-white border border-gray-400 ">
                    <GitHubIcon fontSize="small" className="lg:text-3xl text-black"   />
                    <span className="text-[.9rem] font-medium text-black lg:text-lg ">Star us on github</span>
                </div>
            </Link>
        </nav>
    )
}

export default Navbar
