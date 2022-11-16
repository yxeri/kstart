import axios from "axios";

export const get = async <T>(url: string) => {
  const res = await axios.get(url);
  return res.data as T;
};

export const post = async <T>(url: string, data: object) => {
  const res = await axios.post(url, data);
  return res.data as T;
};
