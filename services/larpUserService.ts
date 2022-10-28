import { LarpsUserModel } from "./../models/larpsUserModel";
import { get, post } from "./handleRequests";

const baseUrl = "https://terminal.thethirdgift.com/api/";

export const createUser = async (newUser: LarpsUserModel) => {
  return await post(baseUrl + "users", newUser);
};
