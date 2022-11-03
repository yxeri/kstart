import * as Dialog from "@radix-ui/react-dialog";
import { LarpFormField } from "./LarpFormField";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { useEffect, useState } from "react";
import { larpsFormData } from "../../formData/larpsFromData";
import { StyledForm } from "../styledComponents/StyledForm";
import { LarpsUserModel } from "../../models/larpsUserModel";
import { Button } from "../styledComponents/Button";
import { Overlay } from "../styledComponents/modal/Overlay";
import { Trigger } from "../styledComponents/modal/Trigger";
import { Content } from "../styledComponents/modal/Content";

interface CreateUserModalProps {
  setNewUser(newUser: LarpsUserModel): void;
  isSuccessful: boolean;
  openModal(): void;
}

export const CreateUserModal = ({
  setNewUser,
  isSuccessful,
  openModal,
}: CreateUserModalProps) => {
  const [open, setOpen] = useState(false);
  const methods = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (isSuccessful) {
      setOpen(false);
    }
  }, [isSuccessful]);

  const onSubmit: SubmitHandler<FieldValues> = (user: FieldValues) => {
    setNewUser({
      data: {
        user: {
          username: user.username,
          password: user.password,
          offName: user.offName,
        },
      },
    });
    methods.reset();
  };

  const formFields = larpsFormData.map((field) => {
    return <LarpFormField key={field.id} field={field} />;
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Trigger onClick={openModal}>Create New User</Trigger>
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
