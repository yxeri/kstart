import { SendMessageModel } from "../../models/chatModels";
import { NextApiRequest, NextApiResponse } from "next";

const baseUrl = "https://terminal.thethirdgift.com/api/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message, messageType, roomId } = req.body.data;

  const token = req.query.token as string;

  const config = {
    Authorization: token,
    responseEncoding: "utf-8",
    Accept: "application.json",
    "Content-Type": "application/json",
  };

  const data = {
    data: {
      message: {
        text: message,
        roomId: roomId,
      },
      messageType: messageType,
      roomId: roomId,
    },
  };

  console.log("newMessage", data);

  fetch(baseUrl + "messages", {
    method: "POST",
    headers: config,
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("REEEESPONSEE", response);

      if (response.status !== 200) {
        console.log("1");

        return { status: response.status, response: response };
      }
      console.log("2");

      return response.json();
    })
    .then((result) => {
      if (result.status) {
        console.log("3");

        res.status(result.status).send(result);
      } else {
        console.log("4");

        res.send(result);
      }
    })
    .catch((error) => {
      console.log("5");

      res.send(error);
    });
}
