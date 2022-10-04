import { NextPage } from "next";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "./User";
import { IUserInformation } from "../models/userInformation";

const UserForm: NextPage = () => {
  const [userInformation, setUserInformation] = useState<IUserInformation>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [userList, setUserList] = useState<IUserInformation[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      userInformation.firstName !== "" &&
      userInformation.lastName !== "" &&
      userInformation.email !== ""
    ) {
      setUserList((current) => [...current, userInformation]);
    }
    setUserInformation({ firstName: "", lastName: "", email: "" });
  };

  const usersToComponent = userList.map((user, i) => {
    return <User user={user} key={i} />;
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={userInformation.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={userInformation.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userInformation.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {usersToComponent}
    </>
  );
};

export default UserForm;
