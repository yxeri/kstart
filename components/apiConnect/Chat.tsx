import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { getCookie } from "cookies-next";
import { forwardRef, useEffect, useRef, useState } from "react";
import { MessageModel, MessagesModel } from "../../models/chatModels";
import { LoginModelResponse } from "../../models/loginModel";
import { AllUsersModel, UserModel } from "../../models/otherUsersModel";
import { getAllMessages, getAllUsers } from "../../services/larpMessageService";
import { Box } from "../styledComponents/Box";
import { Button } from "../styledComponents/Button";
import { StyledForm } from "../styledComponents/StyledForm";
import { StyledInput } from "../styledComponents/StyledInput";
import { Message } from "./Message";
import { useForm } from "react-hook-form";
import { ChatMessageForm } from "../ChatMessageForm";
import { useRecoilValue } from "recoil";
import { loggedInUser } from "../../atoms/atoms";

const token = getCookie("token") as string;

export const Chat = () => {
  const [allUsers, setAllUsers] = useState(new Map<string, UserModel>());
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const userInformation = useRecoilValue(loggedInUser);

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

  //GET ALL USERS AND MESSAGES
  const getUsersAndMessages = () => {
    getAllUsers(token)
      .then((response) => {
        /*  response.data.users.forEach((user) => {
          setAllUsers(new Map(allUsers.set(user.ownerId, user)));
        }); */
        const allUsers: [string, UserModel][] = response.data.users.map(
          (user) => {
            return [user.ownerId, user];
          }
        );
        setAllUsers(new Map(allUsers));
      })
      .catch((error) => {
        console.log("error: ", error);
      });

    if (
      userInformation.data.user.username !== "" &&
      userInformation.data.user.password !== ""
    ) {
      getAllMessages(token)
        .then((response) => {
          console.log("messageData", response);
          setMessages(response.data.messages);
        })
        .catch((error) => {
          console.log("messageError: ", error);
        });
    }
  };

  const message = messages
    .map((mess) => {
      const user = allUsers.get(mess.ownerId);
      return user && <Message key={mess.id} user={user} message={mess} />;
    })
    .filter((c) => c) as JSX.Element[];

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
        overflow: "scroll",
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
      {message}
      <ChatMessageForm />
    </Box>
  );
};
