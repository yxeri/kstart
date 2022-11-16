import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const baseUrl = "https://terminal.thethirdgift.com/api/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  const { token } = query;
  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .get(baseUrl + "messages", config)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status !== undefined) {
        res.status(error.response.status).send(error);
      }
    });
}
