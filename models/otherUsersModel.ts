export interface AllUsersModel {
  data: {
    users: UserModel[];
  };
}

export interface UserModel {
  ownerId: string;
  username: string;
  socketId: string;
  image: {
    fileName: string;
    imageName: string;
  };
}
