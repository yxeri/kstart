import { useFormContext } from "react-hook-form";
import styles from "./FormField.module.css";

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
      {errors[field.id] && <p className={styles.error}>{field.errorMessage}</p>}
    </div>
  );
};
