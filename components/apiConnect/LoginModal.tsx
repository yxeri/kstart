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
/* import { loggedInUser } from "../../atoms/atoms"; */

interface LoginModalProps {
  login(user: LoginModelResponse): void;
  setIsLoading(value: boolean): void;
  setIsLoggedIn(value: boolean): void;
}

export const LoginModal = ({
  login,
  setIsLoading,
  setIsLoggedIn,
}: LoginModalProps) => {
  const [open, setOpen] = useState(false);
  /*   const setLoggedInUser = useSetRecoilState(loggedInUser); */
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

    setIsLoading(true);
    loginUser(loginInformation)
      .then((response) => {
        toast.success("Succsessfully logged in");
        setCookie("token", response.data.token);
        console.log("response: ", response.data);
        login(response);
        setIsLoggedIn(true);
        setOpen(false);
        methods.reset();
      })
      .catch((error) => {
        console.log("error: ", error);

        if (error.response.status === 404) {
          toast.warn("User doesen't exist");
        } else if (error.response.status == 401) {
          toast.warn("incorrect password");
        } else if (error.response.status === 500) {
          toast.error("Server is down");
        } else {
          console.log("loginError: ", error);
        }
      })
      .finally(() => {
        setIsLoading(false);
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
