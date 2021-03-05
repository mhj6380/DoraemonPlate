import { useState } from 'react';
import styled from 'styled-components';
import TransitionLayout from 'components/layout/TransitionLayout';
import BasicTextField from 'components/form/material/BasicTextField';
import { Formik, Form } from 'formik';
import axios from 'util/axios';
import { BACKEND_URL } from 'config';
import BasicSubmitBtn from 'components/tools/BasicSubmitBtn';
import { useAuthState } from 'lib/providers/authProvider';
import { useRouter } from 'next/router';
import { base64ImageUpload } from 'globalFunction';
import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('components/form/QuilEditor'), {
  ssr: false,
});

const BoardWriteWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;

  // Quill Editor Custom Style
  u {
    text-decoration: underline;
  }
  .ql-picker-options {
    span[data-value='8pt'] {
      font-size: 8pt;
    }
    span[data-value='9pt'] {
      font-size: 9pt;
    }
    span[data-value='10pt'] {
      font-size: 10pt;
    }
    span[data-value='11pt'] {
      font-size: 11pt;
    }
    span[data-value='12pt'] {
      font-size: 12pt;
    }
    span[data-value='14pt'] {
      font-size: 14pt;
    }
    span[data-value='16pt'] {
      font-size: 16pt;
    }
    span[data-value='18pt'] {
      font-size: 18pt;
    }
    span[data-value='20pt'] {
      font-size: 20pt;
    }
    span[data-value='22pt'] {
      font-size: 22pt;
    }
    span[data-value='24pt'] {
      font-size: 24pt;
    }
    span[data-value='26pt'] {
      font-size: 26pt;
    }
    span[data-value='28pt'] {
      font-size: 28pt;
    }
  }
  .ql-editor {
    min-height: 200px !important;
  }

  #tab-panel {
    width: 200px;
    height: 160px;
    overflow-y: scroll;
    background: #ededed;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    padding: 5px;
    border: 1px solid lightgrey;
    span {
      font-size: 23px;
      cursor: pointer;
    }
  }
`;

interface Props {}

const BoardWritePage = ({}: Props): JSX.Element => {
  const me = useAuthState();

  const [loading, setLoading] = useState(false);
  const Router = useRouter();
  const [content, setContent] = useState('');

  let contentTemp = '';

  return (
    <TransitionLayout>
      <BoardWriteWrapper>
        <>
          <Formik
            initialValues={{
              title: '',
              content: '',
            }}
            validate={async (values) => {
              const errors: Record<string, string> = {};

              if (values.title === '') {
                errors.title = '제목을 입력해주세요.';
              }

              // if (values.content === '') {
              //   errors.content = '내용을 입력해주세요.';
              // }

              return errors;
            }}
            onSubmit={async (data, { setSubmitting }) => {
              setSubmitting(true);
              setLoading(true);

              // base64 형태로 되어있는 content state의 <img /> 들을 일괄적으로 업로드 해주고, 업로드된 이미지 URL로 치환해준다
              contentTemp = content;
              const images = contentTemp.match(
                /<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/g
              );
              if (images) {
                if (images.length > 0) {
                  for (var i = 0; i < images.length; i++) {
                    const original = images[i];
                    let generate = original.replace('<img src="', '');
                    let base64ImageUrl = generate.replace('">', '');
                    // console.log('GEN', base64ImageUrl);
                    const uploadedImgURL = await base64ImageUpload(
                      base64ImageUrl
                    );

                    const changeContent = contentTemp.replace(
                      base64ImageUrl,
                      uploadedImgURL.toString()
                    );
                    contentTemp = changeContent;
                  }
                }
              }

              // 게시물 업로드
              axios
                .post(`${BACKEND_URL}/board`, {
                  title: data.title,
                  content: contentTemp,
                  author: me.userInfo.user_id,
                  thumbnail: '',
                  tags: '',
                  topic: 'default',
                })
                .then((res: any) => {
                  Router.push(`/board/${res.data.id}`);
                });

              setSubmitting(false);
            }}
          >
            <Form style={{ width: '100%' }}>
              <BasicTextField name="title" />
              <QuillEditor val={content} setVal={setContent} />
              {/* 수정모드일때만  */}
              <BasicSubmitBtn text="작성완료" loading={loading} />
            </Form>
          </Formik>
        </>
      </BoardWriteWrapper>
    </TransitionLayout>
  );
};

export default BoardWritePage;
