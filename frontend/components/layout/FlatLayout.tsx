// import Link from "next/link";
import styled from "styled-components";
import React, { ReactNode } from "react";
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title: string;
  requiredLogin?: boolean; 
} 
 

const FlatContainer = styled.div`
  width:100%; 
  background:black;
`;


  const LayoutFooter = styled.footer`
      width:100%; 
      height:50px;
      background:#333; 
      color:#e3e3e3;
      .inner{
      padding:15px;
      width: 100%;
      margin: 0 auto;
    }

    @media (min-width: 992px) { 
      .inner{
          width:992px;
          padding:0;
      }
    }
    @media (min-width: 1200px) { 
      .inner{
          width:1200px;
      }
    }
`;

const AppLayout = ({ children,title,requiredLogin }:LayoutProps) => {

  

  return (
    <>
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

        <FlatContainer>
          {children}
        </FlatContainer>

    </div>
      <LayoutFooter>
        <div className="inner">
          푸터{ JSON.stringify(requiredLogin)}
        </div>
      </LayoutFooter>
    </>
  );
};

export default AppLayout;
