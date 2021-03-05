import React from 'react';
import styled from 'styled-components';
import { IBasicPageTitle } from '../../../interfaces/layout.interface';

const PageTitleBasic = styled.div`
  display: none;
  width: 100%;
  padding: 30px 15px;
  background: red;
  h1 {
    font-size: 33px;
  }
`;

const BasicPagetitle = ({ title, description }: IBasicPageTitle) => {
  return (
    <PageTitleBasic>
      <div className="inner">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </PageTitleBasic>
  );
};

export default BasicPagetitle;
