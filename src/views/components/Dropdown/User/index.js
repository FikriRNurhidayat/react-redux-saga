import React from 'react'
import { connect } from 'react-redux'
import { Button, Dropdown, Menu } from 'antd'
import {
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons'


export default connect()(
  ({ dispatch }) => {
    const handleSelect = item => {
      if (item.key === 'logout')
        return dispatch({ type: 'auth/LOGOUT' })
    }

    const menu = (
      <Menu onClick={handleSelect}>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <Button type="link" icon={<UserOutlined />} />
      </Dropdown>
    )
  }
)
