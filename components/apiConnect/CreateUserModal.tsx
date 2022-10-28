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
interface CreateUserModalProps {
  setNewUser(newUser: LarpsUserModel): void;
  newUser: LarpsUserModel;
}
export const CreateUserModal = ({
  setNewUser,
  newUser,
}: CreateUserModalProps) => {
  const [open, setOpen] = useState(false);
  const methods = useForm({
    mode: "onBlur",
  });

  const { reset } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (user: FieldValues) => {
    setNewUser({
      username: user.username,
      password: user.password,
      offName: user.offName,
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
                <Button onClick={() => reset()} type="submit">
                  Submit
                </Button>
              </StyledForm>
            </FormProvider>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
