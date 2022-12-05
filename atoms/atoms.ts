import { Room } from "./../models/roomModel";
import { LoginModelUser } from "./../models/loginModel";
import { atom } from "recoil";
import { IUserInformation } from "./../models/userInformation";

export const userListState = atom<IUserInformation[]>({
  key: "userList",
  default: [],
});

export const loggedInUser = atom<LoginModelUser>({
  key: "loggedInUser",
  default: {
    isLoggedIn: false,
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

export const rooms = atom<Map<string, Room>>({
  key: "rooms",
  default: new Map(),
});
