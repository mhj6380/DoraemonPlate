import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import axios from 'axios';

const Editor: any = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const EditorFieldWrapper = styled.div`
  width: 100%;
  min-height: 240px;
  display: flex;
  flex-flow: row wrap;
  background: #fff;
  .rdw-editor-main {
    //에디터 내에 이미지 커스텀 사이징
    img {
      width: 100% !important;
      height: auto;
    }
  }
`;

const PaddingWrapper = styled.div`
  width: 100%;
  padding: 15px;
`;

interface Props {
  val: EditorState;
  setVal: Dispatch<SetStateAction<EditorState>>;
  editMode?: boolean;
  currentVal?: string;
}

const EditorField = ({
  val,
  setVal,
  editMode,
  currentVal,
}: Props): JSX.Element => {
  React.useEffect(() => {
    if (!editMode) return;

    const blocksFromHTML = convertFromHTML(currentVal);

    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    setVal(EditorState.createWithContent(state));
  }, []);

  const onEditorStateChange = (editorState: any) => {
    // editorState에 값 설정
    setVal(editorState);
  };

  const uploadCallback = (file) => {
    console.log('FILE', file);

    return new Promise((resolve, reject) => {
      var reader = new FileReader();

      reader.onloadend = function () {
        console.log(reader.result);
        axios
          .post('https://wizmedia.me:8080/api/playmango/upload', {
            blur: false,
            image: [reader.result],
          })
          .then((res: any) => {
            console.log(res.data[0].fileName);
            resolve({ data: { link: res.data[0].fileName } });
          })
          .catch((err: any) => {
            reject(err);
          });
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <EditorFieldWrapper>
      <PaddingWrapper>
        <Editor
          // 에디터와 툴바 모두에 적용되는 클래스
          wrapperClassName="wrapper-class"
          // 에디터 주변에 적용된 클래스
          editorClassName="editor"
          // 툴바 주위에 적용된 클래스
          toolbarClassName="toolbar-class"
          // 툴바 설정
          toolbar={{
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
            image: { uploadCallback },
          }}
          placeholder="내용을 작성해주세요."
          // 한국어 설정
          localization={{
            locale: 'ko',
          }}
          // 초기값 설정
          editorState={val}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
        />
      </PaddingWrapper>
    </EditorFieldWrapper>
  );
};

export default EditorField;
