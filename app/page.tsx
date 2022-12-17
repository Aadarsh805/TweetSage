"use client";

import { useEffect } from "react";

const HomePage = () => {
  return (
    <>
      {/* {tweets && (
        <div className="flex flex-col gap-4">
          {userProfile?.username !== "" && loadedTweets && (
            <div className="flex gap-2 items-center">
              <Image
                src={userProfile?.profile_image_url}
                alt="user-image"
                className="w-10 h-10 rounded-full border-2 border-red flex items-center justify-center"
                width={10}
                height={10}
              />
              <div className="flex flex-col">
                <p className="text-xl font-bold text-red">
                  {userProfile?.name}
                </p>
                <p className="text-xl font-bold text-red">
                  @{userProfile?.username}
                </p>
              </div>
            </div>
          )}

          {tweets.map((tweet) => (
            <p
              className={`text-yellow-500 mt-2 font-bold text-2xl p-2 bg-gray-100 ${
                !showTweets && "hidden"
              }`}
              key={tweet.text}
            >
              {tweet.text}
            </p>
          ))}
        </div>
      )}

      {answer && (
        <div
          className={`mt-2 font-bold text-2xl p-2 bg-yellow-100 typing-effect ${
            !showAnswer && "hidden"
          }`}
        >
          <>{displayedText}</>
        </div>
      )} */}
    </>
  );
};

export default HomePage;

{
  /* <p className="text-white font-bold text-3xl">{text}</p>
{isTyping && <span>|</span>} */
}

// {answer?.split(/\d+\./).map((string, i) => (
//   <li className="flex" key={i}>
//     {i + 1 + ")"} {string}
//   </li>
// ))}
