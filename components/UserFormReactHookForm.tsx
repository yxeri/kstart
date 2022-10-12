import { JSXElementConstructor, ReactElement, useEffect } from "react";
import { IUserInformation } from "../models/userInformation";
import {
  useForm,
  SubmitHandler,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  FormProvider,
} from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { userListState } from "../atoms/atoms";
import styles from "../styles/UserForms.module.css";
import { FormField } from "./FormField";

const UserFormReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful },
  } = useForm();

  const methods = useForm();

  const setUserList = useSetRecoilState(userListState);

  const onSubmit: SubmitHandler<FieldValues> = (user) => {
    console.log("hello!");

    console.log(user);

    setUserList((current) => [
      ...current,
      { firstName: user.firstName, lastName: user.lastName, email: user.email },
    ]);
  };

  /*   useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ firstName: "", lastName: "", email: "" });
    }
  }, [isSubmitSuccessful, reset]); */

  const data = [
    {
      id: "firstName",
      type: "text",
      label: "First Name",
      rules: { required: true, minLength: 2, pattern: /([A-Ö])\w+/ },
      errorMessage: "First name longer then two letters is required",
    },
    {
      id: "LastName",
      type: "text",
      label: "Last Name",
      rules: { required: true, minLength: 2, pattern: /([A-Ö])\w+/ },
      errorMessage: "Last name longer then two letters is required",
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      rules: {
        required: true,
        minLength: NaN,
        pattern:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      },
      errorMessage: "Please enter a valid email address",
    },
  ];

  const formFields = data.map((field) => {
    return <FormField key={field.id} field={field} />;
  });

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          {formFields}
          {/*  <div className={styles.labelInputContainer}>
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
        </div> */}
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
export default UserFormReactHookForm;
