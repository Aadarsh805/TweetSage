"use client";

import Link from "next/link";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import tweets from "../pages/api/user/tweets";
type TweetData = {
  text: string | null | undefined;
};

const HomePage = () => {
  const [user, setUser] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [showTweets, setShowTweets] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked button");
    setShowTweets(true);
    setShowAnswer(false);

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
  };

  const handleSecondClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked button second");
    setShowTweets(false);
    setShowAnswer(true);

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
  };

  console.log("answer baby", answer);

  return (
    <>
      <div className="flex items-center gap-5">
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="bg-white placeholder:text-gray-400 placeholder:text-lg border-none outline-none p-2"
          placeholder="username"
        />
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="bg-white placeholder:text-gray-400 placeholder:text-lg border-none outline-none p-2"
          placeholder="question"
        />
        <button
          className="text-white p-2 border-white border px-4 h-fit"
          onClick={handleClick}
        >
          get tweets
        </button>

        <button
          className="text-white p-2 border-white border px-4 h-fit"
          onClick={handleSecondClick}
        >
          give data
        </button>
        <Link
          href="/api/user/tweets"
          className="text-black bg-white p-2 border-white border px-4 h-fit"
        >
          go to tweets
        </Link>

        <Link
          href="/api/user/ai"
          className="text-black bg-white p-2 border-white border px-4 h-fit"
        >
          go to data
        </Link>
      </div>

      {tweets ? (
        tweets.map((tweet) => (
          <p
            className={`text-yellow-500 mt-2 font-bold text-2xl p-2 bg-gray-100 ${
              !showTweets && "hidden"
            }`}
            key={tweet.text}
          >
            {tweet.text}
          </p>
        ))
      ) : (
        <p className="text-yellow-500 font-bold text-2xl p-2 bg-gray-100">
          hfdsafjlk
        </p>
      )}

      {answer && (
        <p
          className={`text-yellow-500 mt-2 font-bold text-2xl p-2 bg-gray-100 ${
            !showAnswer && "hidden"
          }`}
        >
          {answer.split(/\d/).map((string, i) => (
            <li className="flex" key={i}>
              {string}
            </li>
          ))}
        </p>
      )}
    </>
  );
};

export default HomePage;
