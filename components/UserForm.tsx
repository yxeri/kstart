import { ChangeEvent, FormEvent, useState, FocusEvent } from "react";
import { User } from "./User";
import { IUserInformation } from "../models/userInformation";
import styles from "../styles/UserForms.module.css";
import { validateForm } from "../validation/validateUserForm";

const UserForm = () => {
  const [userInformation, setUserInformation] = useState<IUserInformation>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [userList, setUserList] = useState<IUserInformation[]>([]);
  const [validationMessage, setValidationMessage] = useState({
    message: "",
    type: "",
    isActive: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    let validationMessage = validateForm(event.target.value, event.target.id);
    setValidationMessage(validationMessage);
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
          {validationMessage.type === "firstName" &&
            validationMessage.isActive && (
              <p className={styles.error}>{validationMessage.message}</p>
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
          {validationMessage.type === "lastName" &&
            validationMessage.isActive && (
              <p className={styles.error}>{validationMessage.message}</p>
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
        {validationMessage.type === "email" && validationMessage.isActive && (
          <p className={styles.error}>{validationMessage.message}</p>
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
