import { useEffect } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { IUserInformation } from "../models/userInformation";
import styles from "../styles/UserForms.module.css";
interface IFormField {
  field: {
    id: string;
    type: string;
    label: string;
    rules: {
      required: boolean;
      minLength: number;
      pattern: RegExp;
    };
    errorMessage: string;
  };
}
export const FormField = ({ field }: IFormField) => {
  const {
    register,
    setError,
    formState: { errors },
  } = useFormContext();

  /*   useEffect(() => {
    setError(field.id, {
      type: "manual",
      message: field.errorMessage,
    });
  }, [setError, field.id, field.errorMessage]); */

  console.log("errors", errors, errors[field.id]);

  return (
    <div className={styles.labelInputContainer}>
      <label htmlFor={field.id}>{field.label}</label>
      <input
        className={styles.input}
        {...register(field.id, {
          minLength: field.rules.minLength,
          pattern: field.rules.pattern,
          required: field.rules.required,
        })}
      />
      {/* <p>{errors[field.id] ? field.errorMessage : null}</p> */}
      {errors[field.id] && <p className={styles.error}>{field.errorMessage}</p>}
    </div>
  );
};
