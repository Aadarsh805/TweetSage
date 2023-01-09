import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "twitter-api-sdk";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new Client(process.env.BearerToken!);
  const allReplies = [];

  let nextToken;
  try {
    const replies: any = await client.tweets.tweetsRecentSearch({
      query: `in_reply_to_status_id:1611991686523289601`,
      expansions: ["author_id"],
      "user.fields": ["name", "profile_image_url"],
      max_results: 100,
    });
    const users = replies.data
      ?.filter((tweet: any) => tweet.author_id !== undefined)
      .map((tweet: any) => tweet.author_id);
    const userData = await Promise.all(
      users!.map(async (user_id: any) => {
        if (user_id !== undefined) {
          const userInfo = await client.users.findUserById(user_id);
          return userInfo.data;
        }
      })
    );
    allReplies.push(...userData);
    nextToken = replies.pagination?.next_token;
    res.status(200).json({ allReplies });
  } catch (err) {
    console.log(err);
  }
};
