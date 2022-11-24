import { atom } from "recoil";
import { LoginModelResponse } from "../models/loginModel";
import { IUserInformation } from "./../models/userInformation";

export const userListState = atom<IUserInformation[]>({
  key: "userList",
  default: [],
});

export const loggedInUser = atom<LoginModelResponse>({
  key: "loggedInUser",
  default: {
    data: {
      user: {
        username: "",
        password: "",
        ownerId: "",
        followingRooms: [],
      },
      token: "",
      id: "",
    },
  },
});
