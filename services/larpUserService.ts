import axios from "axios";
import { LoginModel, LoginModelResponse } from "../models/loginModel";
import { LarpsUserModel } from "./../models/larpsUserModel";
import { get, post } from "./handleRequests";

const baseUrl = "http://localhost:3000/api/";

export const createUser = async (newUser: LarpsUserModel) => {
  return await post(baseUrl + "postUser", newUser);
};

export const loginUser = async (userInformation: LoginModel) => {
  return await post<LoginModelResponse>(baseUrl + "login", userInformation);
};

/* export const loginUser = (userInformation: LoginModel) => {
  return axios.post(baseUrl + "login", userInformation);
}; */
