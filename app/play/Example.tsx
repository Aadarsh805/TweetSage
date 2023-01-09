import React, { FC } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "@mui/material";

export const exampleQuestion = [
  "Tell me about this person",
  "What does this person do",
  "Tell a joke on this person",
  "Describe this person in 5 words",
  "Describe this person in 5 points",
];
type QuestionProps = {
  setQuestion: (value: string) => void;
};

type QuestionProp = {
  setQuestion: (value: string) => void;
};

const Example = ({ setQuestion }: QuestionProps) => {
  return (
    <div className="lg:flex hidden lg:gap-20  items-center justify-center lg:absolute xl:right-[5em] right-0 md:top-1/2 lg:-translate-y-[18em] z-30">
      <div className="">
        <div className="example bg-white lg:shadow-lg shadow-md w-[14em] 2xl:w-[22em] max-h-[14em] 2xl:max-h-fit mb-10 pt-3 pb-1 xl:px-4 px-2 overflow-scroll lg:h-full rounded-lg">
          <p className="font-semibold text-md ml-1 text-[#6804fd] mb-2">
            Try these questions:
          </p>

          <div className="mt-2 ">
            <Examples setQuestion={setQuestion} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;

const Examples: FC<QuestionProp> = ({ setQuestion }: QuestionProp) => {
  return (
    <div>
      {exampleQuestion.map((item, index) => (
        <div
          key={index}
          className="flex justify-between bg-[#f8f9fd] rounded-md mb-2 py-2 px-3"
        >
          <p className="text-base 2xl:text-lg">{item}</p>
          <div
            className="cursor-pointer"
            onClick={() => {
              setQuestion(item);
            }}
          >
            <Tooltip title="copy">
              <ContentCopyIcon className="cursor-pointer" />
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
};
