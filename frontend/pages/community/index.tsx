import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../components/layout/AppLayout";
import CommunityList from '../../components/community/CommunityList'; 
// import

const Home = () => {
  // const dispatch = useDispatch();
  // const { me } = useSelector((state:any) => state.user);

  return (
    <AppLayout title="커뮤니티" requiredLogin={false}> 
      <CommunityList />
    </AppLayout>
  );
};

export default Home;
