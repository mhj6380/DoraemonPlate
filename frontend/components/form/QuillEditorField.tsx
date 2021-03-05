import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

// import Quill from 'quill';
// import ImageUploader from 'quill-image-uploader';

// const Quill: any = dynamic(() => import('quill'));

// const Quill: any = dynamic(() => import('quill'), { ssr: false });
const ReactQuill: any = dynamic(() => import('react-quill'), {
  ssr: false,
});

// Quill.register('modules/imageUpload', ImageUploader);

// const Quill: any = dynamic(() => import('quill'), {
//   ssr: false,
// });
// const QuillClipboard = ReactQuill.import('mudules/clipboard');
// const QuillClipboard = Quill.import('modules/clipboard');

// Quill.register('modules/imageUpload', ImageUploader);

const QuillEditorFieldWrapper = styled.div`
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
  val: any;
  setVal: any;
  editMode?: boolean;
  currentVal?: string;
}

const QuillEditorField = ({
  val,
  setVal,
  editMode,
  currentVal,
}: Props): JSX.Element => {
  const Quill = typeof window == 'object' ? require('quill') : () => false;
  //
  const imageRef = useRef(null);
  const onChangeEditor = (value: string) => {
    setVal(value);
    // console.log(setVal);
  };

  function insertHeart() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, '♥');
    this.quill.setSelection(cursorPosition + 1);
  }

  // const modules = {
  //   toolbar: {
  //     container: '#toolbar',
  //     handlers: {
  //       insertHeart: insertHeart,
  //     },
  //   },
  // };

  const undoChange = () => {
    imageRef.current.click();
  };
  const redoChange = () => {
    console.log('t');
  };

  const modules = {
    // syntax: true,
    toolbar: {
      container: '#toolbar',
      handlers: {
        insertImage: undoChange,
        // insertHeart: () => {
        //   console.log('TEST');
        // },
      },
    },
  };

  const modules2 = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        // [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        // [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        // [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'],
      ],
    },
  };

  return (
    <QuillEditorFieldWrapper>
      <PaddingWrapper>
        <CustomToolbar imageRef={imageRef} />
        <ReactQuill
          placeholder="내용을 입력해주세요 :)"
          theme="snow"
          value={val}
          onChange={onChangeEditor}
          modules={modules}
          // formats={formats}
        />
      </PaddingWrapper>
    </QuillEditorFieldWrapper>
  );
};

const CustomToolbar = ({ imageRef }: any) => (
  <div id="toolbar">
    <input type="file" ref={imageRef} />
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">굴림</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
    <button className="ql-video"></button>
    <button className="ql-insertImage">I</button>
    {/* <button className="ql-insertHeart"><CustomHeart />하트</button> */}
  </div>
);

export default QuillEditorField;
