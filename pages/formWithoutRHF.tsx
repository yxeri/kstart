import { NextPage } from "next";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { PersonInformation } from "../models/PersonInformation";
import styles from "../styles/Home.module.css";

const FormWithoutRHF: NextPage = () => {
  const [personInformation, setPersonInformation] = useState<PersonInformation>(
    { firstName: "", lastName: "" }
  );
  const [personList, setPersonList] = useState<PersonInformation[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonInformation({
      ...personInformation,
      [e.target.name]: e.target.value,
    });
  };
  console.log("personList: ", personList);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      personInformation.firstName !== "" &&
      personInformation.lastName !== ""
    ) {
      setPersonList((current) => [...current, personInformation]);
    }
    setPersonInformation({ firstName: "", lastName: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={personInformation.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={personInformation.lastName}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {personList.map((person, i) => {
        return (
          <div key={i}>
            <p>
              First Name: {person.firstName} Last Name: {person.lastName}
            </p>
            <p></p>
          </div>
        );
      })}
    </>
  );
};

export default FormWithoutRHF;
