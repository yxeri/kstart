import { MessageModel, SendMessageModel } from "./../models/chatModels";
import { roomModel } from "./../models/roomModel";
import { AllUsersModel } from "./../models/otherUsersModel";
import { MessagesModel } from "../models/chatModels";
import { get, post } from "./handleRequests";

const baseUrl = "http://localhost:3000/api/";
export const getAllMessages = async (auth: string) => {
  return await get<MessagesModel>(baseUrl + "messages?token=" + auth);
};

export const getAllUsers = async (auth: string) => {
  return await get<AllUsersModel>(baseUrl + "users?token=" + auth);
};

export const getRooms = async (auth: string) => {
  return await get<roomModel>(baseUrl + "rooms?token=" + auth);
};

export const sendNewMessage = async (
  auth: string,
  newMessage: SendMessageModel
) => {
  return await post<MessageModel>(
    baseUrl + "sendMessage?token=" + auth,
    newMessage
  );
};
