import React from "react";
import TransitionLayout from "components/layout/TransitionLayout";
import BasicPageTitle from 'components/layout/pagetitle/BasicPageTitle';  


const CommunityPage = ():JSX.Element => {   
  return ( 
    <>
      <BasicPageTitle title="커뮤니티" description="커뮤니티 페이지 작업예정" />  
      <TransitionLayout title="커뮤니티" requiredLogin={true}>   
        COMMUNITY 
      </TransitionLayout>
    </>
  ); 
};

  
export default CommunityPage;  