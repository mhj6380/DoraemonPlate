import React, { useCallback } from "react";
import Link from "next/link";
import { TextField } from "@material-ui/core";
import axios from 'axios';
import { BACKEND_URL } from '../../config'; 
import { useCookies } from "react-cookie";
import { Title, ViewWrapper, LoginFormWrapper, NoAccount, CheckboxWrapper, ForgotPassword, FieldWrapper, SubmitBtn } from './styled';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cookies, setCookie] = useCookies(["accessToken"]);
  const { me } = useSelector((state:any) => state.user);
  const Router = useRouter();

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();

    if (!email) return alert("이메일을 입력해 주세요.");
    if (!password) return alert("패스워드를 입력해 주세요.");

 
    axios.post(`${BACKEND_URL}/auth/login`, {
      user_id: email,
      password
    }).then((res:any) => {
      if (res.status === 200) {
        if (!res.data.accessToken || !res.data.refreshToken) return alert("토큰 발급 에러입니다!");
        console.log(cookies); 
        setCookie("accessToken", res.data.accessToken, {
          path: "/",
          maxAge: 100000,
        });
        setCookie("refreshToken", res.data.refreshToken, { 
          path: "/",
          maxAge: 700000,
        }); 
        window.location.href = "/"; 
        return;
      }
    }).catch(function (error) { 
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        return alert(error.response.data.message);
      }
      else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        console.log(error.request); 
      }
      else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
      }
      return alert("서버 에러");
    });
  },[email,password])


  // 이미 로그인중이라면 메인으로 
  if (me) Router.push('/'); 

  return (
    <ViewWrapper> 
      <LoginFormWrapper>
        <Title>Login</Title>
        <LoginTextField
          label="username"
          type="text"
          val={email}
          setVal={setEmail}
        />
        <LoginTextField
          label="password"
          type="password"
          val={password}
          setVal={setPassword}
        />
        <CheckboxWrapper>
          <label htmlFor="longsession">
            로그인 유지
             
            <input id="longsession" type="checkbox" />
          </label>
        </CheckboxWrapper>
        <SubmitBtn onClick={handleSubmit}>로그인</SubmitBtn>
        <ForgotPassword>
          <Link href="/auth/find/password">비밀번호를 잊으셨나요?</Link>
        </ForgotPassword>
        <NoAccount>
          계정이 없으신가요? <Link href="/auth/register">회원가입</Link>
        </NoAccount>
      </LoginFormWrapper>
    </ViewWrapper>
  );
};





const LoginTextField = (props) => {
  const { label, type, val, setVal } = props;
  return (
    <FieldWrapper>
      <TextField
        label={label}
        fullWidth
        value={val}
        type={type}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </FieldWrapper>
  );
};

export default LoginForm;
