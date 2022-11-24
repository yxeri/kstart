import { LoginModelResponse } from "./../models/loginModel";
import axios from "axios";

export const get = async <T>(url: string) => {
  const res = await axios.get(url);
  return res.data as T;
};

/* export const post = async <T>(url: string, data: object) => {
  const res = await axios.post(url, data);
  return res.data as T;
}; */

export const post: (url: string, data: object) => Promise<Response> = async (
  url,
  data
) => {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("HR.Response", response);
      //const responseData = response.json();
      return response;
    })
    .catch((error) => {
      return error;
    });
  /* .then((result) => {
      console.log("HR.result", result);
      return result;
    })
    .catch((error) => {
      console.log("HR.error: ", error);
      return error;
    }); */
};
