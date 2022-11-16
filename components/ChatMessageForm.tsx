import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./styledComponents/Button";
import { StyledForm } from "./styledComponents/StyledForm";
import { StyledInput } from "./styledComponents/StyledInput";

export const ChatMessageForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (e: FieldValues) => {
    reset();
  };

  return (
    <>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        css={{ flexDirection: "row", padding: "10px" }}
      >
        <StyledInput
          {...register("message")}
          css={{ width: "100%" }}
          type={"text"}
          name={"message"}
        ></StyledInput>
        <Button
          css={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          type={"submit"}
        >
          <PaperPlaneIcon />
        </Button>
      </StyledForm>
    </>
  );
};
