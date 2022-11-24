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
import { LoginModel, LoginModelResponse } from "../../models/loginModel";
import { loginUser } from "../../services/larpUserService";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { loggedInUser } from "../../atoms/atoms";
/* import { loggedInUser } from "../../atoms/atoms"; */

interface LoginModalProps {
  handleLoader(value: boolean): void;
  handleIsLoggedin(value: boolean): void;
}

export const LoginModal = ({
  handleLoader,
  handleIsLoggedin,
}: LoginModalProps) => {
  const [open, setOpen] = useState(false);
  const setLoggedInUser = useSetRecoilState(loggedInUser);
  const methods = useForm({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FieldValues> = (loginValues: FieldValues) => {
    const loginInformation: LoginModel = {
      data: {
        user: {
          username: loginValues.username,
          password: loginValues.password,
        },
      },
    };
    //sendLogin(loginInformation);
    //handleLoader(true);
    loginUser(loginInformation)
      .then((response) => {
        if (response) console.log("response:::::", response);
        setCookie("token", response.data.token);
        console.log("response: ", response.data);
        setLoggedInUser(response);
        handleIsLoggedin(true);
        setOpen(false);
        methods.reset();
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => {
        handleLoader(false);
      });

    /* fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInformation),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      }); */
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
