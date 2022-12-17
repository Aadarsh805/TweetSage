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
    <div className="2xl:flex hidden lg:gap-20  items-center justify-center lg:absolute right-[5em] md:top-1/2 lg:-translate-y-[18em] z-30">
      <div className="">
        {/* <h2 className="font-semibold text-lg text-center mb-2">
          Try these questions:
        </h2> */}
        <div className="example bg-white lg:shadow-lg shadow-md w-[20em] 2xl:w-[22em] max-h-[10em] 2xl:max-h-fit mb-10 pt-3 pb-1 px-4  overflow-scroll lg:h-full rounded-lg">
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
          <div onClick={() => navigator.clipboard.writeText(item)}>
            <Tooltip title="copy">
              <ContentCopyIcon className="cursor-pointer w-3" />
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
};
