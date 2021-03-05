import React from 'react';
import styled from 'styled-components';
import BasicNav from '../nav/BasicNav';

const LayoutHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  .inner {
    height: 45px;
    padding: 5px 15px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .header_logo {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    .inner {
      height: 55px;
      width: 992px;
      padding: 10px 0;
    }
  }
  @media (min-width: 1200px) {
    .inner {
      width: 1200px;
    }
  }
`;

const AdminHeader = () => {
  return (
    <LayoutHeader>
      <div className="inner">
        <div className="header_logo">ADM</div>
        <BasicNav />
      </div>
    </LayoutHeader>
  );
};

export default AdminHeader;
