import React, { FC } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "@mui/material";

const exampleQuestion = [
  "Tell me about the person",
  "Tell me 5 jokes on that person",
  "How will u describe the person above",
  "Tell something about the person in a sentence",
];

const Example = () => {
  return (
    <div className="flex lg:gap-20 items-center justify-center lg:absolute md:right-[1em] lg:right-[2.5em] xl:right-[6em] 2xl:right-[5em] md:top-1/2 lg:-translate-y-[15em] z-30">
      <div className="">
        {/* <h2 className="font-semibold text-lg text-center mb-2">
          Try these questions:
        </h2> */}
        <div className="example bg-white lg:shadow-lg shadow-md w-[20em] h-[8em] mb-10 pt-3 pb-1 px-4  overflow-scroll lg:overflow-visible lg:h-full rounded">
          {/* <div className="flex items-center gap-2 mb-4 ml-1">
            <span className="w-3 h-3 rounded-full bg-[#C884A6]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFE74C]"></span>
            <span className="w-3 h-3 rounded-full bg-[#81F495]"></span>
          </div> */}
          <p className="font-semibold text-md ml-1 text-[#6804fd] mb-2">
            Try these questions:
          </p>

          <div className="mt-2 ">
            <Examples />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;

const Examples: FC = () => {
  return (
    <div>
      {exampleQuestion.map((item, index) => (
        <div
          key={index}
          className="flex justify-between bg-[#f8f9fd] rounded-md mb-2 py-2 px-3"
        >
          <p>{item}</p>
          <div
            className="relative group"
            onClick={() => navigator.clipboard.writeText(item)}
          >
            <span className="copied z-20 rounded-md absolute p-1 -top-8 -right-10 bg-black text-white text-xs hidden group-active:block">
              copied
            </span>
            <Tooltip title="copy">
              <ContentCopyIcon className="cursor-pointer w-3" />
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
};
