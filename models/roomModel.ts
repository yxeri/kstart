export interface roomModel {
  data: {
    rooms: Room[];
  };
}

export interface Room {
  hasFullAccess: boolean;
  _id: string;
  roomName: string;
}
