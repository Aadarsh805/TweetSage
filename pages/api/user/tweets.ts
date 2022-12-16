import { NextApiRequest, NextApiResponse } from "next";
import Twitter from "twitter-v2";
import { Client } from "twitter-api-sdk";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new Client(process.env.BearerToken!);

  try {
    const data = await client.tweets.tweetsRecentSearch({
      query: `(from:${req.body.user}) -is:retweet -is:reply -is:quote`,
      max_results: 10,
      expansions: ["author_id"],
      "user.fields": [
        "name",
        "profile_image_url",
      ],
    });
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};
