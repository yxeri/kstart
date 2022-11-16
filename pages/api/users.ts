import axios from "axios";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

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
    .get(baseUrl + "users", config)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log("errorUsers: ", error);
      if (error.response.status !== undefined) {
        res.status(error.response.status).send(error);
      }
    });
}
