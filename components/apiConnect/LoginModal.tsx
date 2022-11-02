import * as Dialog from "@radix-ui/react-dialog";
import { Content } from "../styledComponents/modal/Content";
import { Overlay } from "../styledComponents/modal/Overlay";
import { Trigger } from "../styledComponents/modal/Trigger";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { useState } from "react";
import { StyledForm } from "../styledComponents/StyledForm";
import { loginFormData } from "../../formData/loginFormData";
import { LarpFormField } from "./LarpFormField";
import { Button } from "../styledComponents/Button";
import { LoginModel } from "../../models/loginModel";

interface LoginModalProps {
  setLoginInformation(loginInformation: LoginModel): void;
}

export const LoginModal = ({ setLoginInformation }: LoginModalProps) => {
  const [open, setOpen] = useState(false);

  const methods = useForm({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FieldValues> = (
    loginInformation: FieldValues
  ) => {
    setLoginInformation({
      data: {
        user: {
          username: loginInformation.username,
          password: loginInformation.password,
        },
        token: "",
        id: "",
      },
    });
  };

  const formFields = loginFormData.map((field) => {
    return <LarpFormField key={field.id} field={field} />;
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Trigger>Login</Trigger>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <FormProvider {...methods}>
              <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
                {formFields}
                <Button type="submit">Submit</Button>
              </StyledForm>
            </FormProvider>
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
