import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Skeleton } from 'antd'

import Layout from '../../../layouts'
import Card from '../../../views/components/Card'
import styles from './style.module.css'

const mapStateToProps = state => ({
  menus: state.menu,
  profile: {
    isLoading: state.profile.isLoading,
    fullname: state.profile.fullname,
  }
})

const generateMenu = menus => menus.map(menu => (
  <Fragment key={menu.key}>
    <Card.Menu title={menu.title} url={menu.url} icon={menu.icon} />
  </Fragment>
))

export default connect(mapStateToProps)(
  ({ dispatch, menus, profile }) => {
    const [name, setName] = useState()
    // Did mount
    useEffect(() => {
      dispatch({ type: 'profile/GET_FULLNAME'})
    }, [dispatch])
    // Did update on profile.isLoading?
    useEffect(() => {
      setName(profile.isLoading ? <Skeleton.Button active size="large" /> : profile.fullname)
    }, [profile.isLoading, profile.fullname])

    return (
      <Layout.Main>
        <div className={styles.container}>
          <div className={styles.hero}>Welcome to <strong>the X</strong>, {name}!</div>
          <div className={styles.wrapper}>
            {generateMenu(menus)}
          </div>
        </div>
      </Layout.Main>
    )
  }
)
