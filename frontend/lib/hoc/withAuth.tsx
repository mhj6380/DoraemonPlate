import React, { useState } from 'react'; 

const withAuth = () => (WrappedComponent:any) => {   

  const ChildComp = () => {
    const [me] = useState("TEST WITH AUTH");

    return <WrappedComponent me={me}/>;   
  }

  return ChildComp;

}

export default withAuth; 