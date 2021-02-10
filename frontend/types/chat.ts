export type TRoom = {
  readonly id: number;  
  readonly roomKey: string; 
  readonly roomName: string;
  readonly lastMsg: string;
  readonly lastDatetime: string; 
  readonly seen: boolean;
  readonly profile: string;
}

export type TChatMessage = { 
  id: number;
  nickname: string;
  profile: string;
  datetime: string;
  message: string;
  msgType: string;
  source: string;
}