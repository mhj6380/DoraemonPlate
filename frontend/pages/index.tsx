import React from "react";
import AppLayout from "components/layout/AppLayout";
import Link from 'next/link';
import { InferGetServerSidePropsType } from 'next'
import Axios from "axios";  
import { BACKEND_URL } from "config";
import Cookies from "cookies";
import jwtDecode from "jwt-decode"; 
import BasicPageTitle from 'components/layout/pagetitle/BasicPageTitle'; 
import {  useAuthDispatch } from "lib/providers/authProvider";
 // import { useAuthState } from "lib/providers/authProvider";      
// import axios from "axios"; 


const Home = ({ data }:InferGetServerSidePropsType<typeof getServerSideProps>):any => {  
  // const me = useAuthState();
  // React.useEffect(() => {
  //   console.log("data", data);
  // }, []);
  return (
    <>
      <BasicPageTitle title="언노운 24" description="아직 정해진 것은 아무것도 없다. 하지만 모든 준비는 끝이 났다." /> 
      <AppLayout title="Doraemon" requiredLogin={true}> 
      
      </AppLayout>
    </>
  );
};

  
 

export const getServerSideProps = async (context: any) => { 
  // AUTH 
  // const cookie =  context.req ? context.req.headers.cookie : ''; 
  // Axios.defaults.headers.Cookie = cookie; 
  // const userData = await Axios.get(`${BACKEND_URL}/auth/token-to-user`);  
  const cookies = new Cookies(context.req);
  const decoded: any = cookies.get('accessToken') ? jwtDecode(cookies.get('accessToken')) : ''; 
  // const dispatch = useAuthDispatch();

  let userData:any = {
    data:null
  }

  if (decoded) {
    userData = await Axios.get(`${BACKEND_URL}/auth/${decoded.user_id}`);
    // const test = userData.data;
  }  
  // context.store.dispatch({ type: "UPDATE_USER", userInfo: userData.data }); 
  return { 
    props: {
      data: userData.data,
    },
  }
}

export default Home;