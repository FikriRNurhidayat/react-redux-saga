import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from 'antd'

import styles from './style.module.css'

export default ({ children }) => (
  <Fragment>
    <Helmet title="Binar Legacy" />
    <Layout className={styles.main}>
      {children}
    </Layout>
  </Fragment>
)
