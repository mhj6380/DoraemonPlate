import React from 'react';
import styled from 'styled-components';

const LayoutFooter = styled.footer`
  width: 100%;
  background: #333;
  color: #e3e3e3;

  * {
    color: #e5e5e5;
  }

  .inner {
    padding: 30px 15px;
    width: 100%;
    margin: 0 auto;
  }

  .footer_logo {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 600;
    letter-spacing: 3px;
  }
  .footer_info {
    p {
      font-size: 14px;
      line-height: 8px;
    }
  }

  @media (min-width: 992px) {
    .inner {
      width: 992px;
      padding: 20px 0;
    }
  }
  @media (min-width: 1200px) {
    .inner {
      width: 1200px;
    }
  }
`;

const AdminFooter = () => {
  return (
    <LayoutFooter>
      <div className="inner">
        <div className="footer_info">
          <p>Copyright © 2021 Hakgu. All rights Reserved.</p>
        </div>
      </div>
    </LayoutFooter>
  );
};

export default AdminFooter;
