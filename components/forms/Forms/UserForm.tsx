import { ChangeEvent, FormEvent, useState, FocusEvent } from "react";
import { User } from "../User/User";
import { IUserInformation } from "../../../models/userInformation";
import styles from "./FormField.module.css";
import { validateForm } from "../../../validation/validateUserForm";
import { IValidation } from "../../../models/validationModel";
import { formData } from "../../../formData/formData";
import { Input } from "./Input";

type fields = "firstName" | "lastName" | "email";

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

  const validateForms: fields[] = ["firstName", "lastName", "email"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInformation({
      ...userInformation,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const updateValidation = new Map(validation);
    validateForms.forEach((id) => {
      const validationInformation: IValidation = validateForm(
        userInformation[id],
        id
      );
      updateValidation.set(validationInformation.id, validationInformation);
    });
    setValidation(updateValidation);

    const validationObjects = Array.from(updateValidation.values());
    if (validationObjects.every((values) => values.isActive === false)) {
      setUserList((userList) => [...userList, userInformation]);
      setUserInformation({
        firstName: "",
        lastName: "",
        email: "",
      });
      setValidation(new Map());
    }
  };

  const handleValidation = (updateValidation: Map<string, IValidation>) => {
    setValidation(updateValidation);
  };

  const usersToComponent = userList.map((user, j) => {
    return <User user={user} key={j} />;
  });

  const inputs = formData.map((inputInformation) => {
    return (
      <Input
        key={inputInformation.id}
        inputInformation={inputInformation}
        handleValidation={handleValidation}
        handleChange={handleChange}
        validation={validation}
        userInformation={userInformation}
      ></Input>
    );
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {inputs}
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      {usersToComponent}
    </div>
  );
};

export default UserForm;
