import * as Dialog from "@radix-ui/react-dialog";
import { LarpFormField } from "./LarpFormField";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { useState } from "react";
import { larpsFormData } from "../../formData/larpsFromData";
import { StyledForm } from "../styledComponents/StyledForm";
import { Button } from "../styledComponents/Button";
import { Overlay } from "../styledComponents/modal/Overlay";
import { Trigger } from "../styledComponents/modal/Trigger";
import { Content } from "../styledComponents/modal/Content";
import { createUser } from "../../services/larpUserService";
import { toast } from "react-toastify";

interface CreateUserModalProps {
  setIsLoading(value: boolean): void;
}

export const CreateUserModal = ({ setIsLoading }: CreateUserModalProps) => {
  const [open, setOpen] = useState(false);
  const methods = useForm({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FieldValues> = (user: FieldValues) => {
    const newUser = {
      data: {
        user: {
          username: user.username,
          password: user.password,
          offName: user.offName,
        },
      },
    };

    setIsLoading(true);
    createUser(newUser)
      .then(() => {
        toast.success("Succsess!");
        setOpen(false);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.warn("Try an simpler username");
        } else if (error.response.status === 403) {
          toast.warn("Username already exists");
        } else if (error.response.status === 500) {
          toast.error("Server is down");
        } else {
          console.log("ERROR: ", error);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    methods.reset();
  };

  const formFields = larpsFormData.map((field) => {
    return <LarpFormField key={field.id} field={field} />;
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Trigger>Create New User</Trigger>
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
