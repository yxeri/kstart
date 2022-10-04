import { atom } from "recoil";
import { IUserInformation } from "./../models/userInformation";

export const userListState = atom<IUserInformation[]>({
  key: "userList",
  default: [],
});
