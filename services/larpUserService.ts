import { LoginModel } from "../models/loginModel";
import { LarpsUserModel } from "./../models/larpsUserModel";
import { get, post } from "./handleRequests";

const baseUrl = "http://localhost:3000/api/";

export const createUser = async (newUser: LarpsUserModel) => {
  return await post(baseUrl + "postUser", newUser);
};

export const loginUser = async (userInformation: LoginModel) => {
  return await post(baseUrl + "login", userInformation);
};
