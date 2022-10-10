import { ChangeEvent, FocusEvent } from "react";
import { IInputInformationModel } from "../models/inputInformationModel";
import { IUserInformation } from "../models/userInformation";
import { IValidation } from "../models/validationModel";
import styles from "../styles/UserForms.module.css";
import { validateEmail, validateName } from "../validation/validateUserForm";

type fields = "firstName" | "lastName" | "email";

interface IInputProps {
  inputInformation: IInputInformationModel;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
  handleValidation(updateValidation: Map<string, IValidation>): void;
  validation: Map<string, IValidation>;
  userInformation: IUserInformation;
}

export const Input = ({
  inputInformation,
  handleChange,
  handleValidation,
  validation,
  userInformation,
}: IInputProps) => {
  const validationObject = validation.get(inputInformation.id);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    const { value, id } = e.target;
    const updateValidation = new Map(validation);
    if (id === "email") {
      const validationInformation: IValidation = validateEmail(value, id);
      updateValidation.set(id, validationInformation);
      handleValidation(updateValidation);
    } else {
      const validationInformation: IValidation = validateName(value, id);
      updateValidation.set(id, validationInformation);
      handleValidation(updateValidation);
    }
  };

  let value = userInformation.firstName;
  if (inputInformation.id === "lastName") {
    value = userInformation.lastName;
  }
  if (inputInformation.id === "email") {
    value = userInformation.email;
  }

  return (
    <div className={styles.labelInputContainer}>
      <label htmlFor={inputInformation.id}>{inputInformation.labelText}</label>
      <input
        className={styles.input}
        type={inputInformation.type}
        name={inputInformation.id}
        id={inputInformation.id}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        value={value}
      />
      {validationObject?.isActive && (
        <p className={styles.error}>{validationObject?.message}</p>
      )}
    </div>
  );
};
