import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { send } from "process";

const baseUrl = "https://terminal.thethirdgift.com/api/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body.data.user;

  const loginData = {
    data: { user: { username: username, password: password } },
  };

  //console.log("REQUEST:    ", req);

  /* await axios
    .post(baseUrl + "authenticate", loginData)
    .then((data) => {
      console.log("SUCSESS: ", data);

      res.status(200).send(data.data);
    })
    .catch((error) => {
      console.log("ERROR: ", error);

      if (error.response.status !== undefined) {
        res.status(error.response.status).send(error);
      }
    }); */
  fetch(baseUrl + "authenticate", {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  }).then((data) => {
    console.log("DATA: ", data.status);
    res.status(data.status).send(data.json());
  });
  /*  .then((result) => {
      console.log("RESULT: ", result);
      res.status(result.error.status).send(result);
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      res.send(error);
    }); */
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
