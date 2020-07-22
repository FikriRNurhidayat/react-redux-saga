import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Layout, Space } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import Menu from '../../views/layouts/Menu'
import Breadcrumb from '../../views/layouts/Breadcrumb'

/* Assets */
import Logo from '../../assets/images/Binar.svg'
import styles from './style.module.css'

const { Content, Header, Sider } = Layout

export default ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false)
  const toggleMenu = () => setCollapsed(!isCollapsed)

  return (
    <Fragment>
      <Helmet title="Dashboard" />
      <Layout className={styles.main}>
        <Sider
          collapsed={isCollapsed}
          collapsible
          theme="dark"
          trigger={null}
        >
          <div className={styles.header}>
            <img src={Logo} alt="Binar Academy" className={styles.logo} />
          </div>
          <Menu />
        </Sider>
        <Layout>
          <Header className={styles.topMenu}>
            <Space size="large">
              {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggleMenu,
              })}
              <Breadcrumb />
            </Space>
          </Header>
          <Content>
            <div className={styles.container}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Fragment>
  )
}
