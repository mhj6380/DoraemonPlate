import styled from "styled-components";
import TransitionLayout from 'components/layout/TransitionLayout'; 
import BoardWriteForm from "components/form/BoardWriteForm";  

const BoardWriteWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
`; 

interface Props { 

}

const BoardWritePage = ({  }:Props):JSX.Element=> { 
  
  return (
    <TransitionLayout> 
      <BoardWriteWrapper>
        <h1>글쓰기</h1>
        <BoardWriteForm/> 
      </BoardWriteWrapper>
    </TransitionLayout>
  )

}

export default BoardWritePage; 