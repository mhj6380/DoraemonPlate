import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const SubmitBtn = styled.button`
  box-shadow:none;
  font-size:16px;
  padding:10px 30px;
  border-radius 5px;
  background: #1a1a1a;
  color: #fff;
  width:100%;
`;

const LoadingSubmitBtn = styled.button`
  box-shadow:none;
  font-size:16px;
  padding:10px 30px;
  border-radius 5px;
  background: #1a1a1a;
  color: #fff;
  width:100%;
  opacity:0.5;
  .MuiCircularProgress-root{
    position:relative;
    top:4px;
  }
`;

interface Props {
  text: string;
  loading: boolean;
}

const BasicSubmitBtn = ({ text, loading }: Props): JSX.Element => {
  return (
    <>
      {loading ? (
        <LoadingSubmitBtn className="disabled" type="submit">
          {text}&nbsp;&nbsp;
          <CircularProgress size={20} color="inherit" />
        </LoadingSubmitBtn>
      ) : (
        <SubmitBtn className="disabled" type="submit">
          {text}
        </SubmitBtn>
      )}
    </>
  );
};

export default BasicSubmitBtn;
