import { NextApiRequest, NextApiResponse } from "next";
import data from "../data/index.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "success", data });
};
