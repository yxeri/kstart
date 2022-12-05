import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const baseUrl = "https://terminal.thethirdgift.com/api/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token as string;
  /* const { token } = query; */
  const config = {
    Authorization: token,
    responseEncoding: "utf-8",
    Accept: "application.json",
    "Content-Type": "application/json",
  };
  fetch(baseUrl + "messages", {
    method: "GET",
    headers: new Headers(config),
  })
    .then((response) => {
      if (response.status !== 200) {
        console.log("response1", response);
        return { status: response.status, response: response };
      }
      console.log("response1", response);
      return response.json();
    })
    .then((result) => {
      if (result.status) {
        res.status(result.status).send(result);
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      res.send(error);
    });
}
