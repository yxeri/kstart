import { ChangeEvent, FormEvent, useState, FocusEvent, useEffect } from "react";
import { User } from "./User";
import { IUserInformation } from "../models/userInformation";
import styles from "../styles/UserForms.module.css";
import { validateForm } from "../validation/validateUserForm";
import { IValidation } from "../models/validationModel";

const UserForm = () => {
  const [userInformation, setUserInformation] = useState<IUserInformation>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [userList, setUserList] = useState<IUserInformation[]>([]);

  const [validation, setValidation] = useState<Map<string, IValidation>>(
    new Map()
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value,
    });

    //------- Handle Validation OnChange --------// //------WORKS!!!-----///

    let validationInformation: IValidation = validateForm(
      e.target.value,
      e.target.id
    );

    if (validation.has(validationInformation.id)) {
      setValidation(
        (map) =>
          new Map(map.set(validationInformation.id, validationInformation))
      );
    } else {
      const validate = validation.set(
        validationInformation.id,
        validationInformation
      );
      setValidation(validate);
    }
  };

  const handleOnBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    let validationInformation: IValidation = validateForm(
      event.target.value,
      event.target.id
    );

    if (validation.has(validationInformation.id)) {
      setValidation(
        (map) =>
          new Map(map.set(validationInformation.id, validationInformation))
      );
    } else {
      const validate = validation.set(
        validationInformation.id,
        validationInformation
      );
      setValidation(validate);
    }
  };

  const validateFirstName = validation.get("firstName");
  const validateLastName = validation.get("lastName");
  const validateEmail = validation.get("email");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      validateFirstName &&
      !validateFirstName.isActive &&
      validateLastName &&
      !validateLastName.isActive &&
      validateEmail &&
      !validateEmail.isActive &&
      userInformation.firstName !== "" &&
      userInformation.lastName !== "" &&
      userInformation.email !== ""
    ) {
      setUserList((current) => [...current, userInformation]);
      setUserInformation({ firstName: "", lastName: "", email: "" });
    }
  };

  const usersToComponent = userList.map((user, j) => {
    return <User user={user} key={j} />;
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.labelInputContainer}>
          <label htmlFor="firstName">First Name</label>
          <input
            className={styles.input}
            type="text"
            name="firstName"
            id="firstName"
            value={userInformation.firstName}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {validateFirstName && validateFirstName.isActive && (
            <p className={styles.error}>{validateFirstName?.message}</p>
          )}
        </div>
        <div className={styles.labelInputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input
            className={styles.input}
            type="text"
            name="lastName"
            id="lastName"
            value={userInformation.lastName}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {validateLastName && validateLastName.isActive && (
            <p className={styles.error}>{validateLastName?.message}</p>
          )}
        </div>
        <div className={styles.labelInputContainer}>
          <label htmlFor="email">E-mail</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            value={userInformation.email}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
        </div>
        {validateEmail && validateEmail.isActive && (
          <p className={styles.error}>{validateEmail?.message}</p>
        )}
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      {usersToComponent}
    </div>
  );
};

export default UserForm;
