import { ChangeEvent, FormEvent, useState, FocusEvent } from "react";
import { User } from "./User";
import { IUserInformation } from "../models/userInformation";
import styles from "../styles/UserForms.module.css";
import { validateForm } from "../validation/validateUserForm";
import { IValidation } from "../models/validationModel";
import { formData } from "../formData/formData";
import { Input } from "./Input";

type fields = "firstName" | "lastName" | "email";

const UserForm = () => {
  const [userInformation, setUserInformation] = useState<IUserInformation>({
    firstName: { id: "firstName", value: "" },
    lastName: { id: "lastName", value: "" },
    email: { id: "email", value: "" },
  });

  const [userList, setUserList] = useState<IUserInformation[]>([]);

  const [validation, setValidation] = useState<Map<string, IValidation>>(
    new Map()
  );

  const validationToInputComponent = Array.from(validation.values());

  /* const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInformation({
      ...userInformation,
      [name]: value,
    });
  }; */

  const handleInputChange = (value: string, id: string) => {};

  /*   const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    const { value, id } = e.target;
    const updateValidation = new Map(validation);
    const validationInformation: IValidation = validateForm(value, id);
    updateValidation.set(id, validationInformation);

    setValidation(updateValidation);
  }; */

  const validateForms: fields[] = ["firstName", "lastName", "email"];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updateValidation = new Map(validation);
    validateForms.forEach((id) => {
      const validationInformation: IValidation = validateForm(
        userInformation[id].id,
        id
      );
      updateValidation.set(validationInformation.id, validationInformation);
    });
    setValidation(updateValidation);

    const validationObjects = Array.from(updateValidation.values());

    if (validationObjects.every((values) => values.isActive === false)) {
      setUserList((current) => [...current, userInformation]);
      setUserInformation({
        firstName: { id: "firstName", value: "" },
        lastName: { id: "lastName", value: "" },
        email: { id: "email", value: "" },
      });
      setValidation(new Map());
    }
  };

  console.log("validation: ", validation);
  console.log("validationToInputComponent", validationToInputComponent);

  const usersToComponent = userList.map((user, j) => {
    return <User user={user} key={j} />;
  });

  const inputs = formData.map((inputInformation) => {
    return (
      <Input
        key={inputInformation.id}
        inputInformation={inputInformation}
        //handleOnBlur={handleOnBlur}
        handleInputChange={handleInputChange}
        errorMessage={validation.get(inputInformation.id)}
      ></Input>
    );
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {inputs}
        <div className={styles.labelInputContainer}>
          {/* <label htmlFor="firstName">First Name</label>
          <input
            className={styles.input}
            type="text"
            name="firstName"
            id="firstName"
            value={userInformation.firstName}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {validateFirstName?.isActive && (
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
          {validateLastName?.isActive && (
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
          {validateEmail?.isActive && (
            <p className={styles.error}>{validateEmail?.message}</p>
          )} */}
        </div>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      {usersToComponent}
    </div>
  );
};

export default UserForm;
