export interface LoginModel {
  data: {
    user: { username: string; password: string };
  };
}

export interface LoginModelResponse {
  status: number;
  data: {
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
  };
}

export interface LoginModelUser {
  isLoggedIn: boolean;
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
