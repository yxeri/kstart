import { LarpsUserModel } from "./../models/larpsUserModel";
import { get, post } from "./handleRequests";

const baseUrl = "http://localhost:3000/api/postUser";

export const createUser = async (newUser: LarpsUserModel) => {
  return await post(baseUrl, newUser);
};
