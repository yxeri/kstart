import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { LarpsUserModel } from "../../models/larpsUserModel";

const baseUrl = "https://terminal.thethirdgift.com/api/"; // + "users"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password, offName } = req.body.data.user;

  const newUser: LarpsUserModel = {
    data: {
      user: {
        username: username,
        password: password,
        offName: offName,
      },
    },
  };

  await axios
    .post(baseUrl + "users", newUser)
    .then((data) => {
      res.status(201).send(data.data);
    })
    .catch((error) => {
      if (error.response.status !== undefined) {
        res.status(error.response.status).send(error);
      }
    });
}
