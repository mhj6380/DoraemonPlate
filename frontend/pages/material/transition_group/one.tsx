import React from 'react';
import TransitionLayout from "../../../components/layout/TransitionLayout";
import styled from "styled-components";

const ColorBox = styled.div`
  width:100%;
  height:800px;
  background: blue;
`;

const TransitionGroupPage = () => {
  return (
    <TransitionLayout>
      <ColorBox>1번마 !!</ColorBox> 
    </TransitionLayout> 
  ) 
}

export default TransitionGroupPage;