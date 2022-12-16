"use client";

import Link from "next/link";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { LoadingButton } from "@mui/lab";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { InputAdornment } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import styled from "@emotion/styled";
import BlockIcon from "@mui/icons-material/Block";

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

  const StyledButton = styled(LoadingButton)`
    background-color: grey;
    border: none;
    &:hover {
      background-color: #7214ff;
    }
  `;

  return (
    <>
      <div className="flex flex-col gap-5 p-20 w-[50rem]">
        <div className="grid gap-5 grid-cols-3 w-full">
          <TextField
            label="Twitter Username"
            variant="outlined"
            value={user}
            onChange={(e: any) => {
              setUser(e.currentTarget.value);
              setAnswer("");
              setTweets([]);
              setLoadedTweets(false);
            }}
            required
            helperText={
              noUserError
                ? `Username can't be empty bro!`
                : loadedTweets && !tweets && "username wrong"
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            className="col-span-2"
          />
          <StyledButton
            onClick={handleClick}
            className="border bg-[#7214ff] text-white font-bold hover:opactiy-70 self-stretch"
            loading={loadingTweets}
            variant="contained"
            disableFocusRipple
            disabled={loadedTweets}
          >
            {loadedTweets && tweets ? "tweets loaded" : "get tweets"}
          </StyledButton>
        </div>
        <TextField
          label="Question"
          variant="outlined"
          value={question}
          onChange={(e: any) => setQuestion(e.currentTarget.value)}
          className=""
          required
          helperText={noQuestionError && `Question can't be empty bro!`}
        />

        <div
          className={`relative group w-full flex ${
            noTweets && "cursor-not-allowed"
          }`}
        >
          <div
            className={`absolute bg-[#7214ff] rounded-lg px-3  p-2 font-semibold -bottom-2/3 left-1/2 -translate-x-1/2 hidden ${
              noTweets && "group-hover:flex"
            }`}
          >
            <span className="text-xs text-white">Get tweets first!</span>
          </div>
          <StyledButton
            onClick={handleSecondClick}
            className={`border bg-[#7214ff] text-white font-bold hover:opactiy-70 w-full p-4`}
            loading={loadingData}
            variant="contained"
            disabled={noTweets || !question}
            disableFocusRipple
          >
            give data
          </StyledButton>
        </div>
      </div>

      {tweets && (
        <div className="flex flex-col gap-4">
          {userProfile.username !== "" && loadedTweets && (
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
