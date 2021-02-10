import React from "react";
// import AppLayout from "../../components/layout/AppLayout";
import TransitionLayout from "components/layout/TransitionLayout"; 
import BasicPageTitle from 'components/layout/pagetitle/BasicPageTitle';  


const AdminPage = ():JSX.Element => {   
  return ( 
    <>
      <BasicPageTitle title="어드민" description="어드민 페이지 작업예정" />  
      <TransitionLayout title="어드민" requiredLogin={true}>  
        ADMIN 
      </TransitionLayout>
    </>
  );
};

  
export default AdminPage;