import React, { useState } from "react";
import Link from "next/link";
import { TextField } from "@material-ui/core";
import { Title,ViewWrapper,LoginFormWrapper,NoAccount,CheckboxWrapper,FieldWrapper,SubmitBtn,ValidationAlert } from './styled';
import axios from "util/axios";  
import { useRouter } from 'next/router';
import { useCookies } from "react-cookie"; 

const RegisterForm = () => { 
  const Router = useRouter();
  const [email, setEmail] = React.useState("hakgu@gmail.com"); 
  const [nickname, setNickname] = React.useState("hakgu");
  const [password, setPassword] = React.useState("roahdla99!");
  const [passwordConfirm, setPasswordConfirm] = React.useState("roahdla99!");
  const [agree, setAgree] = React.useState(false);
  const [cookies, setCookie] = useCookies(["accessToken"]); 
 
  // ValidationForm
  const [valiEmail, setValiEmail] = useState("");
  const [valiPwd, setValiPwd] = useState("");
  const [valiPwdConfirm, setValiPwdConfirm] = useState("");
  const [valiNickname, setValiNickname] = useState("");
  
  
  

  const handleOnSubmit = async (e:any) => {
    e.preventDefault();
    // alert("TQ");
    // return;

    if(!validationEmail(email, true)){ 
      return false;
    }

    if (!validationPasswd(password, true)) {
      return false;
    }


    if (!email) setValiEmail("이메일을 입력해주세요."); 
    if (!nickname) setValiNickname("닉네임을 입력해주세요."); 
    if (!password) setValiPwd("비밀번호를 입력해주세요.");  
    if (!passwordConfirm) setValiPwdConfirm("비밀번호 확인을 입력해주세요.");  
    
  
    if (!email || !password || !passwordConfirm || !nickname) {
      alert("정보를 모두 입력해주세요");
      return;
    }


    if (!validationPasswdConfirm(passwordConfirm, true)) {
      return false;
    }

    // if (password !== passwordConfirm) {
    //   alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    //   setPassword("");
    //   setPasswordConfirm("");
    //   return;
    // }


    try {
      const token:any = await axios  
        .post("/auth/register", { 
          user_id: email,
          password,
          nickname 
        }) 
     
      console.log(token);
      console.log(token.data);
      if (token.status === 201) {  
        setCookie("accessToken", token.data.access_token, {
          path: "/",
          maxAge: 100000, 
        });
        setCookie("refreshToken", token.data.refresh_token, { 
          path: "/",
          maxAge: 700000,
        });  
        console.log(cookies); 
        alert(token.data.message); 
        return;
      } else {
        alert(token.data.message);
        return; 
      }
    } catch (err) {
      alert(err);
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      return;
    }
  };


  // 이메일 정규표현식 체크
  const validationEmail = (email, submit) => {
    // var email = e.target.value;
    setEmail(email);
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(email) === false) {
      if (email === "") {
        //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
        if (submit) {
          setValiEmail("이메일은 필수 입력 항목입니다.");
        }
      } else {
        if (submit) {
          setValiEmail("이메일 형식이 올바르지 않습니다.");
        }
      } 
      return false;
    }
    setValiEmail("");
    return true;
  };

  const validationPasswd = (pw, submit) => {
    setPassword(pw);
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/gi);

    if (pw.length < 8 || pw.length > 20) {
      if (submit) {
        setValiPwd("8자리 ~ 20자리 이내로 입력해주세요.");
      } 
      return false;
    } else if (pw.search(/\s/) !== -1) {
      if (submit) {
        setValiPwd("비밀번호는 공백 없이 입력해주세요.");
      } 
      return false;
    } else if (num < 0 || eng < 0) {
      if (submit) {
        setValiPwd("영문,숫자를 혼합하여 입력해주세요.");
      }
      return false;
    } else {
      setValiPwd("");
      return true; 
    }
  };

  const validationPasswdConfirm = (pwConfirm, submit) => {
    setPasswordConfirm(pwConfirm);
    if (password !== pwConfirm) {
      if (submit) {
        setValiPwdConfirm("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      } 
      return false;
    } else {
      setValiPwdConfirm("");
      return true;
    }
  };

  // 이미 로그인중이라면 메인으로 
  // if (me) Router.push('/'); 

  if (cookies.accessToken) {
    Router.push('/'); 
  }

  return (
    <ViewWrapper>
      <LoginFormWrapper>
        <Title>Sign up</Title>
        <LoginTextField
          label="이메일"
          type="text"
          val={email}
          setVal={setEmail}
        />
        <ValidationAlert>{valiEmail}</ValidationAlert>
        <LoginTextField
          label="닉네임"
          type="text"
          val={nickname}
          setVal={setNickname}
        />
        <ValidationAlert>{valiNickname}</ValidationAlert>

        <LoginTextField
          label="비밀번호"
          type="password"
          val={password}
          setVal={setPassword}
        />
        <ValidationAlert>{valiPwd}</ValidationAlert>
        <LoginTextField
          label="비밀번호 확인"
          type="password"
          val={passwordConfirm}
          setVal={setPasswordConfirm}
        /> 
        <ValidationAlert>{valiPwdConfirm}</ValidationAlert>
        <CheckboxWrapper>
          <label htmlFor="longsession">
            개인정보 처리방침 동의 (필수)
            <input 
              id="longsession"
              type="checkbox"
              onChange={() => {
                setAgree(!agree);
              }}
            />
          </label>
          &nbsp;&nbsp;
          <a target="_blank" href="/agree">
            내용보기
          </a>
          <br />
          <br />
          <label htmlFor="longsession">
            서비스 이용약관 동의 (필수)
            <input
              id="longsession"
              type="checkbox"
              onChange={() => {
                setAgree(!agree);
              }}
            />
          </label>
          &nbsp;&nbsp;
          <a target="_blank" href="/agree">
            내용보기
          </a>
        </CheckboxWrapper>
        
        <SubmitBtn onClick={handleOnSubmit}>회원가입</SubmitBtn>
        <NoAccount>
          이미 계정이 있으신가요? <Link href="/auth/login">로그인</Link>
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


export default RegisterForm;
