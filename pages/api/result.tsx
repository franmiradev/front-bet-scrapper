import { NextApiRequest, NextApiResponse } from "next";
import { conn } from '../../app/utils/database';


type Result = {
  date: string;
  team_one: string;
  team_two: string;
  prob_two_goals: number;
  prob_three_goals: number;
};

type Props = {
  results: Result[];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function getResult(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM match";
        const response = await conn.query(query);
        const results = response.rows;
        return res.status(200).json(results);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}