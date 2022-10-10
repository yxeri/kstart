import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { IInputInformationModel } from "../models/inputInformationModel";
import { IUserInformation } from "../models/userInformation";
import { IValidation } from "../models/validationModel";
import styles from "../styles/UserForms.module.css";

interface IInputProps {
  inputInformation: IInputInformationModel;
  //handleOnBlur(e: FocusEvent<HTMLInputElement, Element>): void;
  handleInputChange(value: string, id: string): void;
  errorMessage: IValidation | undefined;
}

export const Input = ({
  inputInformation,
  //handleOnBlur,
  handleInputChange,
  errorMessage,
}: IInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value) {
      handleInputChange(value, inputInformation.id);
    }
  }, [value, handleInputChange, inputInformation.id]);

  const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    const { value, id } = e.target;
    if (id === "firstName" || "lastName") {
    }
  };

  return (
    <div className={styles.labelInputContainer}>
      <label htmlFor={inputInformation.id}>{inputInformation.labelText}</label>
      <input
        className={styles.input}
        type={inputInformation.type}
        name={inputInformation.id}
        id={inputInformation.id}
        value={value}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      {errorMessage?.isActive && (
        <p className={styles.error}>{errorMessage?.message}</p>
      )}
    </div>
  );
};
