import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SendMessageModel } from "../../models/chatModels";
import { Button } from "../styledComponents/Button";
import { StyledForm } from "../styledComponents/StyledForm";
import { StyledInput } from "../styledComponents/StyledInput";

interface ChatMessageFormProps {
  sendMessage(newMessage: SendMessageModel): void;
}

export const ChatMessageForm = ({ sendMessage }: ChatMessageFormProps) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (message) => {
    const messageArray = [];
    messageArray.push(message.message);

    const newMessage: SendMessageModel = {
      data: {
        message: messageArray,
        messageType: "CHAT",
        roomId: "111111111111111111111110",
      },
    };

    sendMessage(newMessage);
    reset();
  };

  return (
    <>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        css={{
          flexDirection: "row",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <StyledInput
          {...register("message")}
          css={{ width: "100%" }}
          type={"text"}
          name={"message"}
        />
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
