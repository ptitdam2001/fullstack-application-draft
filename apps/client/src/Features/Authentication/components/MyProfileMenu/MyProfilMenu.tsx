import { UserOutlined } from "@ant-design/icons"
import { Button, Dropdown, MenuProps, Tooltip } from "antd"
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid'

type Props = {
  myProfilePath?: string;
  otherMenuElements?: React.ReactNode[];
}

export const MyProfilMenu = ({ myProfilePath = '/app/my-profile', otherMenuElements = []}: Props) => {
  const items: MenuProps['items'] = [
    {
      key: uuid(),
      label: <Link to={myProfilePath}>My profile</Link>
    },
    ...otherMenuElements.map((elt => ({
      key: uuid(),
      label: elt
    })))
  ];

  return (
    <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
       <Tooltip title="My Profile" placement="left">
        <Button type="primary" shape="circle" icon={<UserOutlined />} onClick={(e) => e.preventDefault()} />
      </Tooltip>
    </Dropdown>


  )
}
