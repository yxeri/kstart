import { NextPage } from "next";
import { useEffect, useState } from "react";
import { PersonInformation } from "../models/PersonInformation";
import { useForm, SubmitHandler } from "react-hook-form";
import { Person } from "../components/Person";

interface IFormInput {
  firstName: string;
  lastName: string;
}

const FormReactHookForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IFormInput>();

  const [personList, setPersonList] = useState<PersonInformation[]>([]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setPersonList((current) => [
      ...current,
      new PersonInformation(data.firstName, data.lastName),
    ]);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ firstName: "", lastName: "" });
    }
  }, [isSubmitSuccessful, reset]);

  console.log("personList", personList);

  const persons = personList.map((person, i) => {
    return <Person person={person} key={i} />;
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName"> First Name</label>
        <input {...register("firstName", { required: true, minLength: 2 })} />
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName", { required: true, minLength: 2 })} />
        <button type="submit">Submit</button>
      </form>
      {persons}
    </>
  );
};
export default FormReactHookForm;
