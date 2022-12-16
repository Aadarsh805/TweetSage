import React, { FC } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentCopyIcon from '@mui/icons-material/ContentCopy'



const exampleQuestion = [
    "Tell me about the person",
    "Tell me 5 jokes on that person",
    "How will u describe the person above",
    "Tell something about the person in a sentence",
];

const Example = () => {
    return (
        <div className="flex  lg:gap-20 items-center justify-center lg:absolute md:right-[1em] lg:right-[2.5em] xl:right-[6em] 2xl:right-[10em] md:top-1/2 lg:-translate-y-[15em]   ">
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
    )
}

export default Example


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
                        <ContentCopyIcon className="cursor-pointer" />
                    </div>
                </div>
            ))}
        </div>
    );
};
