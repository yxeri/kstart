export interface LoginModel {
  data: {
    user: { username: string; password: string };
    token: string;
    id: string;
  };
}
