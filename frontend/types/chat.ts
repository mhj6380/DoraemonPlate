export type TRoom = {
  readonly id: number;
  readonly roomKey: string;
  readonly roomName: string;
  readonly lastMsg: string;
  readonly lastDatetime: string;
  readonly seen: boolean;
  readonly profile: string;
};

export type TChatMessage = {
  id?: number;
  room_key: string;
  nickname: string;
  profile: string;
  insert_datetime: string;
  message: string;
  message_type: string;
  source: string;
  from_user: string;
  to_user: string;
};
