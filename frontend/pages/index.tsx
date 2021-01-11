import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/layout/AppLayout";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
// import
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { loadUserRequestAction } from "../reducers/user";   
import Link from 'next/link';

const Home = () => {
  const { me } = useSelector((state: any) => state.user);
  const accessToken = Cookies.get("accessToken");
  const dispatch = useDispatch(); 

  const {
    mainPosts,
    hasMorePosts,
    loadPostsError,
    loadPostsLoading,
  } = useSelector((state:any) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    console.log("me", me);
  }, [me]);

  useEffect(() => {
    function onScroll() {
      console.log(
        window.scrollY,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight
      );

      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          console.log("loadPostsLoading", loadPostsLoading);
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
        }
      }
    }

    console.log("hasMorePost", hasMorePosts);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);


  const handleTest = () => {
    dispatch(loadUserRequestAction({ data:jwtDecode<any>(accessToken).user_id })); 
  }

  return (
    <AppLayout title="도라에모옹" requiredLogin={true}> 
      {loadPostsError}
      <button onClick={handleTest}>TEST</button> 
      <Link href="/auth/login">LOGIN</Link>
    </AppLayout>
  );
};

export default Home;
