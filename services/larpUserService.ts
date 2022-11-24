import axios from "axios";
import { LoginModel, LoginModelResponse } from "../models/loginModel";
import { LarpsUserModel } from "./../models/larpsUserModel";
import { get, post } from "./handleRequests";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:3000/api/";

export const createUser = async (newUser: LarpsUserModel) => {
  return await post(baseUrl + "postUser", newUser);
};
/// SOMETHINGS WRONG!!!
export const loginUser: (
  userInformation: LoginModel
) => Promise<LoginModelResponse> = async (userInformation: LoginModel) => {
  const serviceReturn = await post(baseUrl + "login", userInformation)
    .then((response) => {
      if (response.ok) {
        console.log("blahaba: ", response.json());
        toast.success("Succsessfully logged in");
        return response.json();
      } else {
        if (response.status === 404) {
          toast.warn("User doesen't exist");
          return response.status;
        } else if (response.status == 401) {
          toast.warn("incorrect password");
          return response.status;
        } else if (response.status === 500) {
          toast.error("Server is down");
          return response.status;
        } else {
          toast.error("Unknown error");
          return response.status;
        }
      }
    })
    .then((result) => {
      return result;
    });
  return serviceReturn;
};

/* export const loginUser = (userInformation: LoginModel) => {
  return axios.post(baseUrl + "login", userInformation);
}; */
