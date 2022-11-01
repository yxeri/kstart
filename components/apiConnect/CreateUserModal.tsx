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
import { LarpsUserModel } from "../../models/larpsUserModel";
import { Button } from "../styledComponents/Button";
interface CreateUserModalProps {
  setNewUser(newUser: LarpsUserModel): void;
  newUser: LarpsUserModel;
  isCreated: boolean;
}
export const CreateUserModal = ({
  setNewUser,
  newUser,
  isCreated,
}: CreateUserModalProps) => {
  const [open, setOpen] = useState(false);
  const methods = useForm({
    mode: "onBlur",
  });

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
  };

  const formFields = larpsFormData.map((field) => {
    return <LarpFormField key={field.id} field={field} />;
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Create New User</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <FormProvider {...methods}>
              <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
                {formFields}
                <Button type="submit">Submit</Button>
              </StyledForm>
            </FormProvider>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
