import { getCookie } from "cookies-next";
import { useEffect, useRef, useState } from "react";
import {
  MessageModel,
  SendMessageModel,
  TempMessageModel,
} from "../../models/chatModels";

import { UserModel } from "../../models/otherUsersModel";
import {
  getAllMessages,
  getAllUsers,
  getRooms,
  sendNewMessage,
} from "../../services/larpMessageService";
import { Box } from "../styledComponents/Box";
import { Message } from "./Message";
import { ChatMessageForm } from "./ChatMessageForm";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInUser, rooms } from "../../atoms/atoms";
import { TempMessage } from "./TempMessage";

const token = getCookie("token") as string;

export const Chat = () => {
  const [allUsers, setAllUsers] = useState(new Map<string, UserModel>());
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const userInformation = useRecoilValue(loggedInUser);
  const [tempMess, setTempMess] = useState<TempMessageModel>({
    data: {
      message: [],
      messageType: "",
      roomId: "",
    },
  });
  const [showTempMess, setShowTempMess] = useState(false);
  const [myRooms, setMyRooms] = useRecoilState(rooms);

  const useChatScroll = (dep: MessageModel[]) => {
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (divRef.current) {
        divRef.current.scrollTop = divRef.current.scrollHeight;
      }
    }, [dep]);
    return divRef;
  };
  const reference = useChatScroll(messages);

  //GET ALL USERS, MESSAGES AND ROOMS
  useEffect(() => {
    if (
      userInformation.data.user.username !== "" &&
      userInformation.data.user.password !== ""
    ) {
      getAllUsers(token)
        .then((response) => {
          const users = new Map(
            response.data.users.map((obj) => [obj.ownerId, obj])
          );
          setAllUsers(new Map(users));
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }

    if (
      userInformation.data.user.username !== "" &&
      userInformation.data.user.password !== ""
    ) {
      getAllMessages(token)
        .then((response) => {
          setMessages(response.data.messages);
        })
        .catch((error) => {
          console.log("messageError: ", error);
        });
    }

    if (
      userInformation.data.user.username !== "" &&
      userInformation.data.user.password !== ""
    ) {
      getRooms(token)
        .then((response) => {
          const allRooms = new Map(
            response.data.rooms.map((obj) => [obj._id, obj])
          );
          setMyRooms(new Map(allRooms));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [
    userInformation.data.user.username,
    userInformation.data.user.password,
    setMyRooms,
  ]);

  const sendMessage = (newMessage: SendMessageModel) => {
    setTempMess(newMessage);
    setShowTempMess(true);
    sendNewMessage(token, newMessage)
      .then((response) => {
        setMessages((messages) => [...messages, response.data.data.message]);
        setShowTempMess(false);
      })
      .catch((error) => {
        console.log("messageError: ", error);
      });
  };

  const message = messages.map((mess) => {
    const user = allUsers.get(mess.ownerId);
    return user && <Message key={mess._id} user={user} message={mess} />;
  });
  /* .filter((c) => c) as JSX.Element[]; */

  return (
    <Box
      ref={reference}
      css={{
        position: "absolute",
        top: "100px",
        left: "10px",
        bottom: "10px",
        right: "10px",
        background: "$krusoGreen",
        border: "2px solid $krusoYellow",
        borderRadius: "30px",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "20px",
        scrollBehavior: "smooth",
        "@bp1": {
          left: "unset",
          top: "unset",
          right: "110px",
          bottom: "20px",
          width: "400px",
          height: "700px",
        },
      }}
    >
      <Box css={{ display: "flex", flexDirection: "column", gap: "13px" }}>
        {message}
        {showTempMess && <TempMessage tempMess={tempMess} />}
      </Box>
      <ChatMessageForm sendMessage={sendMessage} />
    </Box>
  );
};
