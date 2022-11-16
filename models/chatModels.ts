export interface MessagesModel {
  data: {
    messages: MessageModel[];
  };
}

export interface MessageModel {
  ownerId: string;
  text: string[];
  id: string;
}
