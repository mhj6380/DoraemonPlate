import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../components/layout/AppLayout";
import CommunityWriteForm from '../../components/community/CommunityWriteForm'; 


const Home = () => {
  // const dispatch = useDispatch(); 
  // const { me } = useSelector((state:any) => state.user);

  return (
    <AppLayout title="커뮤니티" requiredLogin={false}> 
      <CommunityWriteForm />
    </AppLayout>
  );
};

export default Home;
