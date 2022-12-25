import Link from "next/link";
import {
  HTMLAttributes,
  HtmlHTMLAttributes,
  MouseEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";
import { LoadingButton } from "@mui/lab";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { InputAdornment } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import styled from "@emotion/styled";
import BlockIcon from "@mui/icons-material/Block";
import { FormControl } from "@mui/material";
import AutoComplete from "@mui/material/Autocomplete";
import { exampleQuestion } from "./Example";
import useResize from "../../hooks/useResize";

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

type SuggestionType = {
  id: number;
  label: string;
};

function getSuggestions(sampleQ: string[]): SuggestionType[] {
  return sampleQ.reduce<SuggestionType[]>((acc, curr, indx) => {
    acc.push({
      id: indx + 1,
      label: curr,
    });
    return acc;
  }, []);
}

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
  const [suggestions] = useState<SuggestionType[]>(
    getSuggestions(exampleQuestion)
  );
  const width = useResize();

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
    // console.log("clicked button second");
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

  const handleInputChange = (e: SyntheticEvent, value: string) => {
    setQuestion(value);
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

  // Background color change have been made here

  // background-color: ${loadedTweets && tweets ? 'grey' : '#7214ff'} ;
  const StyledButton = styled(LoadingButton)`
    background-color: grey;
    border: none;
    &:hover {
      background-color: #7214ff;
    }
  `;

  // Button Changes adding here

  // const StyledTweetButton = styled(LoadingButton)`
  //   background-color: ${loadedTweets && tweets ? 'grey' : '#7214ff'} ;
  //   border: none;
  //   &:hover {
  //     background-color: ${loadedTweets ? 'grey' : '#7214ff'};
  //     opacity: ${!loadedTweets && user ? '.8' : '1'}
  //   }
  // `;

  // const StyledAnswerButton = styled(LoadingButton)`
  //   background-color: ${question && tweets ? '#7214ff' : 'grey'} ;
  //   border: none;
  //   &:hover {
  //     background-color: ${question ? '#7214ff' : 'grey'};
  //     opacity: ${question && tweets ? '.8' : '1'}
  //   }
  // `;

  return (
    <div className="text-center flex flex-col items-center justify-center w-full sm:max-w-[35em] z-30">
      <div className="flex flex-col sm:gap-5 gap-2 w-full">
        <form
          className=" grid sm:gap-5 gap-2 grid-cols-3 w-full"
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

          {/* Making button changes here */}
          <StyledButton
            type="submit"
            onClick={handleClick}
            className="border h-[4em] bg-[#7214ff] text-white font-bold hover:opacity-80 self-stretch"
            loading={loadingTweets}
            variant="contained"
            disableFocusRipple
            // disabled={!user || loadedTweets}
            // Another change have been made here
            disabled={loadedTweets}
          >
            {loadedTweets && tweets ? "tweets loaded" : "get tweets"}
          </StyledButton>
        </form>

        {width < 1024 ? (
          <AutoComplete
            freeSolo
            disablePortal
            options={suggestions}
            onInputChange={handleInputChange}
            id="combo-box"
            renderOption={(
              props: HTMLAttributes<HTMLLIElement>,
              option: SuggestionType
            ) => {
              return (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Question"
                error={noQuestionError}
                autoComplete="off"
                variant="outlined"
                value={question}
                // onChange={(e: any) => setQuestion(e.currentTarget.value)}
                className=""
                required
                helperText={noQuestionError && `Question can't be empty bro!`}
              />
            )}
          />
        ) : (
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
        )}

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
            className={`border bg-[#7214ff] text-white font-bold w-full`}
            sx={{ padding: "1rem" }}
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
