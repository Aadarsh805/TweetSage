import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

export default function Accordian() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Typography className="font-bold text-2xl mb-6 text-[#7214ff] text-center">
        Frequently asked questions
      </Typography>

      <Accordion className="w-full py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Why are u getting username wrong?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>
              You don't have your phone number linked with your Twitter account.
            </li>
            <li>You have not tweeted recently.</li>
            <li>Our API might be down, retry after sometime.</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-full py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are fetching your recent tweets through the Twitter API and
            giving them to the chatGPT API along with the question you asked. It
            replies with the most optimal answer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-full py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Where can I see the source code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It's available right here in our{" "}
            <Link
              target="_blank"
              className="text-[#7214ff]"
              href="https://github.com/Aadarsh805/TweetSage.ai"
            >
              Github repository
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="w-full  py-2 shadow-bottom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I contribute to the project?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Definitely yes, this project is completely open-source and open to
            your valuable contributions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion> */}
    </div>
  );
}
