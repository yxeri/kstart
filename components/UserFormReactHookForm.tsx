import { useEffect } from "react";
import { IUserInformation } from "../models/userInformation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { userListState } from "../atoms/atoms";
import styles from "../styles/UserForms.module.css";

const UserFormReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IUserInformation>({
    mode: "onBlur",
  });

  const setUserList = useSetRecoilState(userListState);

  const onSubmit: SubmitHandler<IUserInformation> = (user) => {
    setUserList((current) => [
      ...current,
      { firstName: user.firstName, lastName: user.lastName, email: user.email },
    ]);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: { id: "firstName", value: "" },
        lastName: { id: "lastName", value: "" },
        email: { id: "email", value: "" },
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labelInputContainer}>
          <label htmlFor="firstName"> First Name</label>
          <input
            className={styles.input}
            {...register("firstName", { required: true, minLength: 2 })}
          />
          {errors.firstName && (
            <p className={styles.error}>
              First name longer than two characters is required
            </p>
          )}
        </div>
        <div className={styles.labelInputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input
            className={styles.input}
            {...register("lastName", { required: true, minLength: 2 })}
          />
          {errors.lastName && (
            <p className={styles.error}>
              Last name longer than two characters is required
            </p>
          )}
        </div>
        <div className={styles.labelInputContainer}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <p className={styles.error}>Please enter a valid email adress</p>
          )}
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserFormReactHookForm;
