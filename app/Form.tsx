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
import { FormControl } from "@mui/material";

type TweetData = {
  text: string | null | undefined;
};

type UserData = {
  profile_image_url: string;
  username: string;
  name: string;
};

type AnswerProps = {
  answer: string;
  setAnswer: (value: string) => void;
  displayedText: string;
  setDisplayedText: (value: string) => void;
};

const Form = ({
  answer,
  setAnswer,
  displayedText,
  setDisplayedText,
}: AnswerProps) => {
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
  const [noUserError, setNoUserError] = useState(false);
  const [noQuestionError, setNoQuestionError] = useState(false);

  useEffect(() => {
    setUser("");
    setQuestion("");
    setTweets([]);
    setAnswer("");
  }, []);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
    setUserProfile(results.data?.includes?.users[0]);
    setLoadingTweets(false);
    setLoadedTweets(true);
  };

  const handleSecondClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked button second");
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
    <div className="text-center flex flex-col items-center justify-center w-full max-w-[35em] z-30">
      <div className="flex flex-col gap-5 py-12 px-8 w-full">
        <form
          className="grid gap-5 grid-cols-3 w-full"
          onSubmit={(e) => handleClick}
        >
          <TextField
            label="Twitter Username"
            error={noUserError || (loadedTweets && !tweets)}
            autoComplete="off"
            variant="outlined"
            value={user}
            onChange={(e: any) => {
              setUser(e.currentTarget.value);
              setAnswer("");
              setTweets([]);
              setLoadedTweets(false);
              setNoUserError(false);
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
            type="submit"
            onClick={handleClick}
            className="border bg-[#7214ff] h-[4em] text-white font-bold hover:opacity-80 self-stretch"
            loading={loadingTweets}
            variant="contained"
            disableFocusRipple
            disabled={loadedTweets}
          >
            {loadedTweets && tweets ? "tweets loaded" : "get tweets"}
          </StyledButton>
        </form>
        <TextField
          label="Question"
          error={noQuestionError}
          autoComplete="off"
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
            className={`border bg-[#7214ff] text-white font-bold w-full p-4`}
            loading={loadingData}
            variant="contained"
            disabled={noTweets}
            disableFocusRipple
            loadingIndicator="Getting answer..."
          >
            Get answer
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Form;
