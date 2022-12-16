

import React from 'react'
import bgImage from 'public/bg-curve.png'


const Answers = () => {
    return (
        <div className="example w-full  max-w-[40em]  h-[19em] sm:h-[20em] md:h-[21em] bg-white px-3 py-3 shadow-xl rounded-xl z-[10] overflow-y-scroll">
            <div className="flex w-full gap-5 items-center mb-4 z-[30] ml-2 lg:ml-5">
                <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#fa85a4]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffe56e]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#52e282]"></span>
                </div>
                <p className="text-white py-1 px-7 rounded-full bg-[#7214ff]">Answers</p>
            </div>
            <div className="bg-[#f8f9fd] w-[99%]  h-[14.5em] sm:h-[16em] md:h-[17em] mx-auto px-4 py-2 rounded-lg z-[20]  ">
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
    )
}

export default Answers
