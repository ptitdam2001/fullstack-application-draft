import { Button, Layout, Space } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

import { ApplicationBar } from "../components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "@common/components";
import menu from "../../config/menu";

export const ConnectedLayout = () => {
	const [openSider, setOpenSider] = useState<boolean>(true);

	const toggleMenu = () => {
		setOpenSider(!openSider);
	};

	return (
		<Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
			<Layout style={{ height: "100vh" }}>
				<Header>
					<ApplicationBar />
				</Header>
				<Content>
					<Layout
						data-testid="connectedLayout-content"
						style={{ height: "100%" }}
					>
						<Sider collapsible collapsed={openSider} trigger={null}>
							<Space
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
								}}
							>
								<Button type='primary' onClick={toggleMenu}>
									{openSider ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
								</Button>
							</Space>

							<Sidebar menu={menu} />
						</Sider>
						<Content>
							<Outlet />
						</Content>
					</Layout>
				</Content>
			</Layout>
		</Space>
	);
};
