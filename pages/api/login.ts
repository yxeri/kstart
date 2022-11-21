import axios, { AxiosError } from "axios";
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
/* export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userData = {
    data: {
      user: {
        username: req.body.data.user.username,
        password: req.body.data.user.password,
      },
    },
  };

  try {
    let response = await axios.post(
      "https://terminal.thethirdgift.com/api/authenticate",
      userData
    );
    res.send(response.data);
  } catch (error) {
    const err = error as AxiosError;

    if (err) {
      console.log("Axios Error: " + err.response?.status + " " + err.code);
      res.send(err.response?.status);
    }
  }
} */
