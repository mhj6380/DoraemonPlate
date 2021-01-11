import React from 'react';
import styled from 'styled-components';
// import dynamic from 'next/dynamic'
import dynamic from 'next/dynamic';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const ListWrapper = styled.div`
  width:100%;
  
`; 

interface CommunityItemIF {
  id: number; 
  title: string;
}
 
const CommunityList = () => {
  
  
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  ); 

  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };


  return (
    <ListWrapper>
     TEST
    </ListWrapper>
  )
};

 

export default CommunityList;
