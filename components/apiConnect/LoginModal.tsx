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
import { useReducer, useState } from "react";
import { StyledForm } from "../styledComponents/StyledForm";
import { loginFormData } from "../../formData/loginFormData";
import { LarpFormField } from "./LarpFormField";
import { Button } from "../styledComponents/Button";
import { LoginModel } from "../../models/loginModel";
import { loginUser } from "../../services/larpUserService";
import { setCookie } from "cookies-next";
import { useSetRecoilState } from "recoil";
import { loggedInUser } from "../../atoms/atoms";
import { toast } from "react-toastify";

interface LoginModalProps {
  handleLoader(value: boolean): void;
}

export const LoginModal = ({ handleLoader }: LoginModalProps) => {
  const [open, setOpen] = useState(false);
  const setLoggedInUser = useSetRecoilState(loggedInUser);
  const methods = useForm({
    mode: "onBlur",
  });

  console.log("Rerender");

  const onSubmit: SubmitHandler<FieldValues> = (loginValues: FieldValues) => {
    const loginInformation: LoginModel = {
      data: {
        user: {
          username: loginValues.username,
          password: loginValues.password,
        },
      },
    };
    handleLoader(true);
    loginUser(loginInformation)
      .then((response) => {
        if (response) {
          toast.success(`Logged In as ${response.data.data.user.username}`);
          setCookie("token", response.data.data.token);
          setLoggedInUser({ isLoggedIn: true, data: response.data.data });
          setOpen(false);
          methods.reset();
        }
      })
      .catch((error) => {
        console.log("errorModal: ", error);
        if (error.response.status === 404) {
          toast.warn("User doesen't exist");
        } else if (error.response.status === 401) {
          toast.warn("incorrect password");
        } else if (error.response.status === 500) {
          toast.error("Server is down");
        } else {
          toast.error("Unknown error");
          console.log("LUS.Error", error);
        }
      })
      .finally(() => {
        handleLoader(false);
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
