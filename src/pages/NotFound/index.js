import React, { Fragment } from 'react'
import { Button, Layout } from 'antd'
import { Helmet } from 'react-helmet'
import { SwapLeftOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router'

import IMG404 from '../../assets/images/404.png'
import styles from './style.module.css'

export default withRouter(
  props => (
    <Fragment>
      <Helmet title="Not Found" />
      <Layout className={styles.main}>
        <div className={styles.container}>

          <div className={styles.image}>
            <img src={IMG404} alt="Not Found" />
          </div>

          <div className={styles.content}>
            <div className={styles.title}>Page not found!</div>
            <div className={styles.body}>There's nothing here after all, so go away!</div>
          </div>
            <Button
              type="primary"
              icon={<SwapLeftOutlined />}
              size="large"
              onClick={() => props.history.push('/')}
            >
            Get Back
          </Button>
        </div>
      </Layout>
    </Fragment>
  )
)
