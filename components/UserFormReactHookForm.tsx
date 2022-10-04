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
    formState: { isSubmitSuccessful },
  } = useForm<IUserInformation>();

  const setUserList = useSetRecoilState(userListState);

  const onSubmit: SubmitHandler<IUserInformation> = (user) => {
    setUserList((current) => [
      ...current,
      { firstName: user.firstName, lastName: user.lastName, email: user.email },
    ]);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ firstName: "", lastName: "", email: "" });
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
        </div>
        <div className={styles.labelInputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input
            className={styles.input}
            {...register("lastName", { required: true, minLength: 2 })}
          />
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
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default UserFormReactHookForm;
