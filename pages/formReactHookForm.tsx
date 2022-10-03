import { NextPage } from "next";
import { useEffect, useState } from "react";
import { PersonInformation } from "../models/PersonInformation";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
}

const FormReactHookForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<IFormInput>();
  const [personInformation, setPersonInformation] = useState<PersonInformation>(
    { firstName: "", lastName: "" }
  );
  const [personList, setPersonList] = useState<PersonInformation[]>([]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setPersonList((current) => [
      ...current,
      new PersonInformation(data.firstName, data.lastName),
    ]);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ firstName: "", lastName: "" });
    }
  }, [formState, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName"> First Name</label>
        <input {...register("firstName", { required: true, minLength: 2 })} />
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName", { required: true, minLength: 2 })} />
        <button type="submit">Submit</button>
      </form>
      {personList.map((person, i) => {
        return (
          <div key={i}>
            <p>
              First Name: {person.firstName} Last Name: {person.lastName}
            </p>
            <p></p>
          </div>
        );
      })}
    </>
  );
};
export default FormReactHookForm;
