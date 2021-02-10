import React from "react";
import AppLayout from "components/layout/AppLayout";
// import CommunityWriteForm from 'components/community/CommunityWriteForm'; 


const Home = () => {

  return (
    <AppLayout title="커뮤니티" requiredLogin={false}> 
      {/* <CommunityWriteForm /> */}
    </AppLayout>
  );
};

export default Home;
