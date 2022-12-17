import React from "react";

const Slogan = () => {
  return (
    <div className="flex  lg:gap-2 z-30 max-w-[20em] md:max-w-full md:flex-row flex-col">
      <span className="lg:text-3xl flex-1 text-xl  w-fit font-bold text-[#6804fd]">
        TweetSage :
      </span>
      <p className="text-lg sm:text-xl lg:text-3xl text-[#090426]">
        Because your tweets deserve some sage advice.
      </p>
    </div>
  );
};

export default Slogan;
