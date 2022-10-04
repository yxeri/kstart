import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IUserInformation } from "../models/userInformation";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "./User";

const UserFormReactHookForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IUserInformation>();

  const [users, setPersonList] = useState<IUserInformation[]>([]);

  const onSubmit: SubmitHandler<IUserInformation> = (data) => {
    setPersonList((current) => [
      ...current,
      { firstName: data.firstName, lastName: data.lastName, email: data.email },
    ]);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ firstName: "", lastName: "", email: "" });
    }
  }, [isSubmitSuccessful, reset]);

  const usersToComponent = users.map((user, i) => {
    return <User user={user} key={i} />;
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName"> First Name</label>
        <input {...register("firstName", { required: true, minLength: 2 })} />
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName", { required: true, minLength: 2 })} />
        <label htmlFor="email">Email</label>
        <input {...register("email", { required: true })} />
        <button type="submit">Submit</button>
      </form>
      {usersToComponent}
    </>
  );
};
export default UserFormReactHookForm;
