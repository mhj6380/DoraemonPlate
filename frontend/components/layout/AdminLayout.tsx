// import Link from "next/link";
import React, { useEffect } from 'react';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import { BACKEND_URL } from '../../config';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import Link from 'next/link';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

const Logo = styled.div`
  width: 100%;
  height: 60px;
  line-height: 63px;
  color: #fff;
  padding-left: 22px;
  font-size: 20px;
`;

const DefaultContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const AdminLayout = ({ children, title, requiredLogin }: any) => {
  // const me = useAuthState();
  // const dispatch = useAuthDispatch();
  const Router = useRouter();
  const accessToken = Cookies.get('accessToken');
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const [collapesd, setCollapesd] = React.useState(false);
  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setCollapesd(collapsed);
  };

  useEffect(() => {
    if (requiredLogin) {
      console.log('로그인 필수 페이지');
      if (!accessToken) {
        // 로그인되어있지 않다면 로그인창으로
        Router.push('/intro');
      }
    }

    if (!accessToken) {
      // 로그인되어있지 않다면 로그인창으로
      // Router.push("/login");
    } else {
      // 로그인 되어있다면

      console.log(BACKEND_URL + '/auth/' + jwtDecode<any>(accessToken).user_id);
      // axios.get(
      //   BACKEND_URL + "/auth/" + jwtDecode<any>(accessToken).user_id
      // ).then((res:any) => {
      //   console.log(res.data);
      //   const userInfo = res.data;
      //   dispatch({ type: "UPDATE_USER", userInfo });
      // })
    }
  }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <Footer /> */}
      <Layout style={{ minHeight: '100vh' }}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width, target-densityDpi=medium-dpi, viewport-fit=cover"
          />
        </Head>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          collapsed={collapesd}
          onCollapse={onCollapse}
        >
          <Logo>ADMIN</Logo>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link href="/adm">Dashboard</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link href="/adm/user">회원관리</Link>
            </Menu.Item>
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, background: '#fff' }}
          />
          <Content style={{ margin: '0 16px' }}>
            <DefaultContentWrapper>{children}</DefaultContentWrapper>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            DoraemonPlate ©2018 Created by Hakgu
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
