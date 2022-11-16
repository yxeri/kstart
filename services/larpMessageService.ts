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
