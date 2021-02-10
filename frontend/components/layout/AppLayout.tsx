// import Link from "next/link";
import React, { useEffect } from "react";
import Head from 'next/head';  
import Cookies from "js-cookie"; 
import { useRouter } from 'next/router'; 
import {  useAuthDispatch } from "../../lib/providers/authProvider"; 
import jwtDecode from "jwt-decode"; 
import { BACKEND_URL } from "../../config"; 
  
import Header from "./header/BasicHeader"; 
import Footer from "./footer/BasicFooter"; 



const AppLayout = ({ children,title,requiredLogin }:any) => {
  
  // const me = useAuthState();
  const dispatch = useAuthDispatch();
  const Router = useRouter();
  const accessToken = Cookies.get("accessToken");

  useEffect(() => { 

    if (requiredLogin) {
      console.log("로그인 필수 페이지"); 
      if (!accessToken) {
        // 로그인되어있지 않다면 로그인창으로
        Router.push("/intro");  
      } 
    }

    if (!accessToken) {
      // 로그인되어있지 않다면 로그인창으로
      // Router.push("/login");
    } else {
      // 로그인 되어있다면 
       
      console.log(BACKEND_URL + "/auth/" + jwtDecode<any>(accessToken).user_id);
      // axios.get(
      //   BACKEND_URL + "/auth/" + jwtDecode<any>(accessToken).user_id
      // ).then((res:any) => { 
      //   console.log(res.data); 
      //   const userInfo = res.data;
      //   dispatch({ type: "UPDATE_USER", userInfo });
      // })
    }
    
  }, []); 
  
  return (
    <>
   
      <Header/>
    <div className="container-fluid">
      <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width, target-densityDpi=medium-dpi, viewport-fit=cover"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> 
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />

      {/* SEO  */}
      <meta name="description" content="도라에몽 플레이트 입니다." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="도라에몽" />
      <meta property="og:description" content="도라에몽 플레이트 입니다." />
      <meta property="og:url" content="https://domain.com" />
      <meta property="og:image" content="https://domain.com/image.jpeg" />  
      </Head>

        <div className="page-content">
          {children}
          {/* {JSON.stringify(children)} */}
        </div>

    </div>
      
      <Footer />  
    </>
  );
};




export default AppLayout;    
