export interface LoginModel {
  data: {
    user: { username: string; password: string };
  };
}

export interface LoginModelResponse {
  data: {
    user: {
      username: string;
      password: string;
      ownerId: string;
      followingRooms: string[];
    };
    id: string;
    token: string;
  };
}
