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
  };
}
export const FormField = ({ field }: IFormField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
    </div>
  );
};
