import { Layout, Space } from 'antd';

const { Header, Content } = Layout;

import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={{ height: '100vh' }}>
        <Header data-testid="defaultLayout-header">

        </Header>
        <Content data-testid="defaultLayout-content">
          <Outlet />
        </Content>
      </Layout>
    </Space>
  )
}
