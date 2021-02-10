import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import styled from 'styled-components';
import Link from 'next/link';


const ToolsWrapper = styled.div`
  position:fixed;
  right:20px;
  bottom:20px;

  .tool_item{
    display:inline-block;
    width:40px;
    height:40px;
    background: #1a1a1a;
    color:#fff;
    font-size:25px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border-radius: 5px;
    margin-top:10px;
  }
`;

interface Props {

}

const BoardTools = ({  }:Props):JSX.Element=> {
  
  return (
    <> 
      <ToolsWrapper>
        <Link href='/board/write'>
          <a className='tool_item'>
          <BsPencilSquare />
          </a>
        </Link>
      </ToolsWrapper>
    </>
  ) 

}

export default BoardTools;