import React, { useEffect,useState } from 'react';
import TransitionLayout from "components/layout/TransitionLayout";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useChatDispatch } from "lib/providers/chatProvider"; 
import ChatList from 'components/chat/ChatList';
import ChatForm from 'components/chat/ChatForm'; 
import { useChatState } from 'lib/providers/chatProvider';
import { TChatMessage } from 'types/chat';

const ChatRoomWrapper = styled.div`
  width:100%;
  height:100%; 
  display:flex;
  flex-flow: row wrap;
`;

interface Props { 

}

const ChatRoom = ({  }:Props):JSX.Element=> {
  const router = useRouter()
  const dispatch = useChatDispatch();
  const chat = useChatState();
  const { room_key } = router.query; 
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    if (!room_key) return;

    dispatch({ type: "JOIN_ROOM", payload: room_key.toString() })  
    
  }, []);

  const handleSendMessage = (e:any):void => {
    e.preventDefault();
   
    const payload: TChatMessage = {
      id: 3,
      room_key: room_key.toString(), 
      nickname: "학구", 
      profile: "profile2", 
      datetime: 'datetime2',
      message,  
      msgType: 'image2',
      source: 'source2'
      } 

      dispatch({type:"SEND_MESSAGE", payload})   
    
    setMessage(''); 
  }

  return (
    <TransitionLayout title="채팅" requiredLogin={true}>  
    <ChatRoomWrapper>
        Room : {room_key} 
        <ChatList datas={chat.chatList}/> 
        <ChatForm message={message} setMessage={setMessage} handleSendMessage={handleSendMessage}/>
     </ChatRoomWrapper>
   </TransitionLayout>
  )

} 

export default ChatRoom;