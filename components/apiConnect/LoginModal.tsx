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
import axios from "axios";
/* import { loggedInUser } from "../../atoms/atoms"; */

interface LoginModalProps {
  login(user: LoginModelResponse): void;
  handleLoader(value: boolean): void;
  handleIsLoggedin(value: boolean): void;
}

export const LoginModal = ({
  login,
  handleLoader,
  handleIsLoggedin,
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
    //sendLogin(loginInformation);
    handleLoader(true);
    loginUser(loginInformation)
      .then((response) => {
        toast.success("Succsessfully logged in");
        setCookie("token", response.data.token);
        console.log("response: ", response.data);
        login(response);
        handleIsLoggedin(true);
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
        handleLoader(false);
      });

    /* axios
      .post("http://localhost:3000/api/login", loginInformation)
      .then((response) => {
        toast.success("Succsessfully logged in");
        setCookie("token", response.data.data.token);
        console.log("response: ", response.data.data);
        login(response.data);
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
      }); */
  };

  /* const sendLogin = (loginInformation: LoginModel) => {
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInformation),
    })
      .then((data) => data.json())
      .then((response) => {
        toast.success("Succsessfully logged in");
        setCookie("token", response.data.token);
        console.log("response: ", response.data);
        login(response);
        console.log("success: ", response);

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
  }; */

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
