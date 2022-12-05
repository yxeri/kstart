export interface MessagesModel {
  data: {
    messages: MessageModel[];
  };
}

export interface MessageModel {
  ownerId: string;
  text: string[];
  _id: string;
  timeCreated: string;
  roomId: string;
}

export interface SendMessageModel {
  data: {
    message: string[];
    messageType: string;
    roomId: string;
  };
}
