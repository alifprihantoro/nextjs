// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { onAuthStateChanged } from "firebase/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { FirebaseAuth } from "../../service/firebase";

type Data = {
  name?: string;
  msg?: string;
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    onAuthStateChanged(FirebaseAuth, (user) => {
      // jika user login
      if (user) {
        // update data short
        res.status(200).json({ name: user.uid });
        return;
      } else {
        res.status(401).json({ msg: "not login" });
        return;
      }
    });
  } catch (error) {
    res.status(400).json({ msg: "connection error" });
  }
}
