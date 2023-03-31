import { Menu, MenuProps } from "antd";
import { MenuItemProp } from "../../types";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

type AntDMenuItem = Required<MenuProps>["items"][number] & {
	link: string;
};

function getItem(item: MenuItemProp): AntDMenuItem {
	return {
		key: uuid(),
		icon: item.icon,
		children: item.children ? item.children.map(getItem) : undefined,
		label: item.label,
		type: "string",
		link: item.link,
	} as AntDMenuItem;
}

type Props = {
	menu: MenuItemProp[];
};

export  const Sidebar = ({ menu }: Props) => {
  const navigate = useNavigate();

	return (
		<Menu
			mode="inline"
			theme="dark"
			items={menu.map(getItem)}
			onClick={(args) => {
        const { item } = args;
        if (item.props.link) {
          navigate(item.props.link);
        }
			}}
			triggerSubMenuAction="click"
		/>
	);
};
