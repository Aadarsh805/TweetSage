import React from "react";

const Slogan = () => {
  return (
    <div className="flex sm:gap-2 z-30 sm:max-w-full sm:flex-row flex-col">
      <p className="sm:text-3xl flex-1 text-xl w-full whitespace-nowrap font-bold text-[#6804fd]">
        TweetSage :
      </p>
      <p className="text-lg sm:text-3xl text-[#090426]">
        Because your tweets deserve some sage advice.
      </p>
    </div>
  );
};

export default Slogan;
