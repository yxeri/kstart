import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const baseUrl = "https://terminal.thethirdgift.com/api/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body.data.user;

  const loginData = {
    data: { user: { username: username, password: password } },
  };

  await axios
    .post(baseUrl + "authenticate", loginData)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      if (error.response.status !== undefined) {
        res.status(error.response.status).send(error);
      }
    });
}
