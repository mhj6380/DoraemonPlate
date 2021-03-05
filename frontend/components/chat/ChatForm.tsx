import styled from "styled-components";
import { IoMdSend } from 'react-icons/io';
import React from 'react';


const ChatFormWrapper = styled.form`
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
  position:relative;

  .chatting_input{
    width:100%;
    height:40px;
    border: 1px solid lightgrey;
    box-shadow:none;
    padding-left:15px;
  }

  .chatting_submit{
    background:none;
    position:absolute;
    right:10px;
    top:5px;
    font-size:20px;
    color: #0080FF;
  }
  
`;

interface Props { 
  handleSendMessage: React.FormEventHandler<HTMLFormElement>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ChatForm = ({ message, setMessage, handleSendMessage }:Props):JSX.Element=> {

  const handleChangeMessage = (e: any) => {
    setMessage(e.target.value);
  }

  return (
    <ChatFormWrapper onSubmit={handleSendMessage}>
      <input className="chatting_input" type="text" value={message} onChange={handleChangeMessage}/> 
      <button className="chatting_submit">
        <IoMdSend/>
      </button>
    </ChatFormWrapper>
  )

}

export default ChatForm;