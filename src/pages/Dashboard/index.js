import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Layout from '../../layouts'
import Card from '../../views/components/Card'
import styles from './style.module.css'

const mapStateToProps = state => ({
  menus: state.menu
})

const generateMenu = menus => menus.map(menu => (
  <Fragment key={menu.key}>
    <Card.Menu title={menu.title} url={menu.url} icon={menu.icon} />
  </Fragment>
))

export default connect(mapStateToProps)(
  props => {
    const { menus } = props

    return (
      <Layout.Main>
        <div className={styles.container}>
          <div className={styles.hero}>Welcome to <strong>the X</strong>, Fikri!</div>
          <div className={styles.wrapper}>
            {generateMenu(menus)}
          </div>
        </div>
      </Layout.Main>
    )
  }
)
