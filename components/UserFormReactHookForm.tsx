import {
  useForm,
  SubmitHandler,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { userListState } from "../atoms/atoms";
import styles from "../styles/UserForms.module.css";
import { FormField } from "./FormField";
import { RHFFormData } from "../formData/RHFFormData";

const UserFormReactHookForm = () => {
  const methods = useForm({
    mode: "onBlur",
  });

  const setUserList = useSetRecoilState(userListState);

  const onSubmit: SubmitHandler<FieldValues> = (user) => {
    console.log("hello!");

    console.log(user);

    setUserList((current) => [
      ...current,
      { firstName: user.firstName, lastName: user.lastName, email: user.email },
    ]);
  };

  const formFields = RHFFormData.map((field) => {
    return <FormField key={field.id} field={field} />;
  });

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          {formFields}
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default UserFormReactHookForm;
