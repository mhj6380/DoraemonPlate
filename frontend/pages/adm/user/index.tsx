import React from 'react';
import AdminLayout from 'components/layout/AdminLayout';
import DataTable from 'components/adm/DataTable';
import { PageHeader } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const AdminPage = (): JSX.Element => {
  return (
    <>
      {/* <BasicPageTitle title="어드민" description="어드민 페이지 작업예정" /> */}
      <AdminLayout title="어드민" requiredLogin={true}>
        <PageHeader
          className="site-page-header"
          title="회원관리"
          breadcrumb={{ routes }}
          style={{ padding: '20px 20px' }}
        />
        <DataTable />
      </AdminLayout>
    </>
  );
};

export default AdminPage;
