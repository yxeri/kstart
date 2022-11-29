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
  fetch(baseUrl + "authenticate", {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (response.status !== 200) {
        return { status: response.status, response: response };
      }

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
