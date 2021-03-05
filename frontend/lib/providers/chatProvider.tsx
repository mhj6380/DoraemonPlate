import React, {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  useEffect,
} from 'react';
import { TRoom, TChatMessage } from '../../types/chat';
import { SocketContext } from './socketContext';
import axios from 'util/axios';
import { BACKEND_URL } from 'config';
// 필요한 타입들을 미리 선언

// 상태를 위한 타입
type State = {
  inRoomKey: string;
  roomList: TRoom[];
  chatList: TChatMessage[];
};

// 모든 액션들을 위한 타입
type Action =
  | { type: 'JOIN_ROOM'; payload: string }
  | { type: 'SEND_MESSAGE'; payload: TChatMessage }
  | { type: 'SET_ROOM_LIST'; payload: TRoom[] }
  | { type: 'SET_CHAT_LIST'; payload: TChatMessage[]; inRoomKey: string }
  | { type: 'PUSH_CHAT_LIST'; payload: TChatMessage };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type AuthDispatch = Dispatch<Action>;

// Context 만들기
const ChatStateContext = createContext<any | null>(null);
const ChatDispatchContext = createContext<AuthDispatch | null>(null);

// async function setRoomMessages(room_key:string) {
//   const messages = await axios.get(`${BACKEND_URL}/chat/message/${room_key}`);
//   console.log("setRoomMessages!");
//   console.log(messages.data);
//   dispatch({ type: 'SET_CHAT_LIST', messages.data })
// }

// 리듀서
function reducer(state: State, action: Action): State {
  const socket = useContext(SocketContext);

  switch (action.type) {
    // 채팅방 입장 시 발동.
    case 'JOIN_ROOM':
      socket.emit('joinRoom', { room_key: action.payload });
      // setRoomMessages(action.payload);
      return {
        ...state,
        inRoomKey: action.payload,
      };

    case 'SEND_MESSAGE':
      const newSendChats = [...state.chatList, action.payload];
      socket.emit('msgToServer', action.payload);

      const {
        room_key,
        insert_datetime,
        message,
        from_user,
        to_user,
        nickname,
        profile,
        message_type,
        source,
      } = action.payload;

      axios.post(`${BACKEND_URL}/chat/message`, {
        room_key,
        message,
        from_user,
        to_user,
        nickname,
        profile,
        insert_datetime,
        message_type,
        source,
      });

      return {
        ...state,
        chatList: newSendChats,
      };

    case 'SET_ROOM_LIST':
      return {
        ...state,
        roomList: action.payload, // text가 자동완성되며, string 타입인걸 알 수 있습니다.
      };

    case 'SET_CHAT_LIST':
      return {
        ...state,
        chatList: action.payload,
      };

    // 메세지를 수신받을 때 발동한다.
    case 'PUSH_CHAT_LIST':
      const newChats = [...state.chatList, action.payload];

      return {
        ...state,
        chatList: newChats,
      };

    default:
      throw new Error('Unhandled action');
  }
}

// AuthProvider 에서 useReduer를 사용하고
// AuthStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  // const accessToken = Cookies.get("accessToken"); // => 'value'
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (!socket) return;

    socket.on('msgToClient', (payload: TChatMessage) => {
      // 채팅 메세지 수신
      dispatch({ type: 'PUSH_CHAT_LIST', payload });
    });

    function disconnect() {
      console.log('[received] disconnect');
      socket.once('reconnect', () => {
        console.log('[reconnected]');
      });
    }

    // 소켓 연결이 끉길경우 다시 연결 (아직 검증되지 않음)
    socket.on('disconnect', () => {
      disconnect();
      return;
    });
  }, []);

  var inRoomKey = null;
  var roomList = [];
  var chatList = [];

  const [state, dispatch] = useReducer(reducer, {
    inRoomKey,
    roomList,
    chatList,
  });

  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useChatState() {
  const state = useContext(ChatStateContext);
  if (!state) throw new Error('Cannot find AuthProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useChatDispatch() {
  const dispatch = useContext(ChatDispatchContext);
  if (!dispatch) throw new Error('Cannot find AuthProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
