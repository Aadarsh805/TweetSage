"use client";

import Link from "next/link";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { LoadingButton } from "@mui/lab";
import Image from "next/image";

type TweetData = {
  text: string | null | undefined;
};

type UserData = {
  profile_image_url: string;
  username: string;
  name: string;
};

const HomePage = () => {
  const [user, setUser] = useState<string>("");
  const [userProfile, setUserProfile] = useState<UserData>({
    profile_image_url: "",
    username: "",
    name: "",
  });
  const [question, setQuestion] = useState<string>("");
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [loadingTweets, setLoadingTweets] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [loadedTweets, setLoadedTweets] = useState(false);
  const [answer, setAnswer] = useState<string>("");
  const [noUserError, setNoUserError] = useState(false);
  const [noQuestionError, setNoQuestionError] = useState(false);
  const [showTweets, setShowTweets] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setUser("");
    setQuestion("");
    setTweets([]);
    setAnswer("");
  }, []);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowTweets(true);
    setShowAnswer(false);

    if (user === "") {
      setNoUserError(true);
      return;
    } else {
      setNoUserError(false);
    }
    setLoadingTweets(true);

    const results = await fetch("/api/user/tweets", {
      method: "POST",
      body: JSON.stringify({
        user,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    setTweets(results.data.data);
    console.log(results.data.includes.users[0]);
    setUserProfile(results.data.includes.users[0]);
    setLoadingTweets(false);
    setLoadedTweets(true);
  };

  const handleSecondClick = async (e: MouseEvent<HTMLButtonElement>) => {
    console.log(tweets);
    e.preventDefault();
    console.log("clicked button second");
    setShowTweets(false);
    setShowAnswer(true);
    setAnswer("");

    if (question === "") {
      setNoQuestionError(true);
      return;
    } else {
      setNoQuestionError(false);
    }
    setLoadingData(true);

    const prompt = `you are given some tweets below, read these tweets : \n
    ${tweets.map((tweet) => tweet.text + "\n")}

    and about the person who wrote those Tweets ${question}
    `;

    const results = await fetch("/api/user/ai", {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    setAnswer(results.result.choices[0].text);
    setLoadingData(false);
  };

  let noTweets = tweets?.length < 1;
  if (tweets === undefined) noTweets = true;

  // typing effect

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayedText(`${answer.substring(0, index)}`);
      index++;

      if (index > answer.length) {
        clearInterval(typing);
      }
    }, 10);

    return () => {
      clearInterval(typing);
    };
  }, [answer]);

  return (
    <>
      <div className=" flex items-center gap-5 bg-black p-20">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
              setAnswer("");
              setTweets([]);
              setLoadedTweets(false);
            }}
            className="bg-white placeholder:text-gray-400 placeholder:text-lg border-none outline-none p-2"
            placeholder="username"
          />
          {noUserError && (
            <p className="text-red-600 text-md">Username can't be empty bro!</p>
          )}
          {loadedTweets && !tweets && (
            <p className="text-red-600 text-md">username wrong</p>
          )}
        </div>
        <LoadingButton
          onClick={handleClick}
          className="hover:bg-gray-500 p-2 border-white border px-4 bg-white text-black"
          loading={loadingTweets}
          variant="contained"
        >
          {loadedTweets && tweets ? "tweets loaded" : "get tweets"}
        </LoadingButton>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="bg-white placeholder:text-gray-400 placeholder:text-lg border-none outline-none p-2"
            placeholder="question"
          />
          {noQuestionError && (
            <p className="text-red-600 text-md">Question can't be empty bro!</p>
          )}
        </div>

        <div className={`relative group ${noTweets && "cursor-not-allowed"}`}>
          <span
            className={`absolute bg-white text-yellow text-xs p-1 -bottom-[4rem] hidden ${
              noTweets && "group-hover:block"
            }`}
          >
            Get tweets first bro!
          </span>
          <LoadingButton
            onClick={handleSecondClick}
            className={`hover:bg-gray-500 p-2 border-white border px-4 bg-white text-black mui-disabled:bg-red`}
            loading={loadingData}
            variant="contained"
            disabled={noTweets || !question}
          >
            give data
          </LoadingButton>
        </div>
      </div>

      {tweets && (
        <div className="flex flex-col gap-4">
          {userProfile.username !== "" && (
            <div className="flex gap-2 items-center">
              <Image
                src={userProfile?.profile_image_url}
                alt="user-image"
                className="w-10 h-10 rounded-full border-2 border-red flex items-center justify-center"
                width={10}
                height={10}
              />
              <div className="flex flex-col">
                <p className="text-xl font-bold text-red">{userProfile.name}</p>
                <p className="text-xl font-bold text-red">
                  @{userProfile.username}
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
      )}
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
