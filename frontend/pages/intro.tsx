import React, { useEffect } from "react";
import FlatLayout from "../components/layout/FlatLayout";
import styled from 'styled-components';
import Link from 'next/link';
import { AiOutlineGlobal } from "react-icons/ai";

const IntroWrapper = styled.div`
background:blue;
.inner{
  width:100%;
  padding:30px 0;
  max-width:380px;
  margin: 0 auto;
}

.intro-left{
  background:#fff;
}
.intro-right{
  background:#64BEFD;
}


@media (min-width: 768px) {
  .inner{height:400px;margin-top: calc(50vh - 200px);}
  .intro-left{
    height:100vh;
    display:flex;
    justify-content: center;
    align-item: center;
    box-align: stretch;
  }
  .intro-right{
    height:100vh;
  } 
}



`;

const JoinBoxVirtical = styled.div`
    width:100%;
    margin-top: 50px;
    .btn {
      display:block;
      width:100%;
      line-height:25px;
      border-radius:20px;
      margin-top:10px;
    }
    span{ font-weight: 700;}
    .btn.register{background:#1D8EEF;color:#fff;}
    .btn.login{background:#fff; border: 2px solid #1D8EEF;color:#1D8EEF;}
`;


const TopicWrapper = styled.div`
    color:#fff;
    display:flex;
    flex-flow: row wrap;
    
    .icon{width:50px;height:50px;text-align:center;}
    .ment{font-size:20px;font-weight:700;}
`;


const Intro = () => {
  return (
    <FlatLayout title="도라에몽"> 
      <IntroWrapper className="row">
        <div className="intro-left col-md-6">
          <div className="inner">
            <h2>도라에몽 플레이트<br/>v 0.0.1</h2>
            
            <JoinBoxVirtical>
              <span>오늘부터 페이지에 가입하세요</span>
              <Link  href="/auth/register"><a className="btn register">가입하기</a></Link>
              <Link  href="/auth/login"><a className="btn login">로그인</a></Link> 
            </JoinBoxVirtical>

          </div>
        </div>
        <div className="intro-right col-md-6"> 
          <div className="inner">
            <Topic Icon={AiOutlineGlobal} ment="파핳핳 샘플입니다."/>
            <Topic Icon={AiOutlineGlobal} ment="파핳핳 샘플입니다."/>
            <Topic Icon={AiOutlineGlobal} ment="파핳핳 샘플입니다."/>
          </div> 
        </div>
      </IntroWrapper>
    </FlatLayout>
  )
}


const Topic = ({ Icon, ment }) => {
  return (
            <TopicWrapper>
              <div className="icon">
                <Icon color="#fff" size="2em" />
              </div>
              <div className="ment">
              { ment}
              </div>
            </TopicWrapper>
  )

}

export default Intro;