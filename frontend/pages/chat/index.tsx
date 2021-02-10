import React, { useContext, useState } from "react"; 
import TransitionLayout from "components/layout/TransitionLayout";
import BasicPageTitle from 'components/layout/pagetitle/BasicPageTitle';  
import { SocketContext } from 'lib/providers/socketContext';   
import { useChatState } from 'lib/providers/chatProvider'; 
import { TChatMessage } from 'types/chat';
import ExPersonalChat from "components/example/ExPersonalChat";


const ChatPage = ():JSX.Element => {   
    const socket = useContext(SocketContext); 
    const chat = useChatState();
    const [message, setMessage] = useState('');
    const handleChangeMessage = (e:any) => {  
      setMessage(e.target.value); 
    }
  
    const handleMessage = () => { 

    
    const payload:TChatMessage = {
      id: 3,
      nickname: "학구", 
      profile: "profile2",
      datetime: 'datetime2',
      message,  
      msgType: 'image2',
      source: 'source2'
      } 
     
      socket.emit('msgToServer', payload);   
      // 채팅 메세지 발송   
    }

    return (  
    <>
      <BasicPageTitle title="채팅" description="여러개의 브라우저 창으로 테스트하시면 좋습니다." />    
          <TransitionLayout title="채팅" requiredLogin={true}>  
           <input type='text' value={message} onChange={handleChangeMessage}/> 
           <button onClick={handleMessage}>SEND</button>
           


          {JSON.stringify(chat)}   
          <ExPersonalChat/>
      </TransitionLayout>
    </> 
  ); 
};

  
export default ChatPage;  
