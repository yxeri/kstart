import { useEffect } from "react";
import { IUserInformation } from "../models/userInformation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { userListState } from "../atoms/atoms";

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
    </>
  );
};
export default UserFormReactHookForm;
