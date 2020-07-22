import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const mapStatetoProps = state => ({
  menus: state.menu
})

const generateMenu = menus => menus.map(({ icon, key, title, url}) => (
  <Menu.Item key={key} icon={React.createElement(icon)}>
    <Link to={url}>{title}</Link>
  </Menu.Item>
))

const setSelectedKeys = props => {
  const { menus, location } = props;
  const activeMenu = menus.find(({ url }) => location.pathname === url) || {}
  return activeMenu.key
}

export default connect(mapStatetoProps)(
  withRouter(props => {
    const { dispatch, menus } = props

    // onMount
    useEffect(() => {
      dispatch({
        type: 'menu/GET'
      })
    }, [dispatch])

    return (
      <Menu
        theme="dark"
        selectedKeys={setSelectedKeys(props)}
      >
        {generateMenu(menus)}
      </Menu>
    )
  })
)
