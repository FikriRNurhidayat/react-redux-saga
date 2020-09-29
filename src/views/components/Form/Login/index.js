import React from 'react'
import { Button, Card, Form, Input } from 'antd'
import { connect } from 'react-redux'
import { MailOutlined } from '@ant-design/icons'

import styles from './style.module.css' 
import Logo from '../../../../assets/images/Binar.svg' 

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading
})

export default connect(mapStateToProps)(
  ({ dispatch, isLoading }) => {
    const onFinish = values => dispatch({ type: 'auth/LOGIN', payload: values }) 

    return (
      <Card
        cover={(
          <div className={styles.cover}>
            <img src={Logo} alt="Binar Academy" />
          </div>
        )}
        type="inner"
        className={styles.card}
      >
        <div className={styles.form}>
          <Form
            onFinish={onFinish}
            hideRequiredMark
          >

            <div className={styles.formItem}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input suffix={<MailOutlined />} type="email" size="large" placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password size="large" placeholder="Enter your password" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large" loading={isLoading}>
                  Log in
                </Button>
              </Form.Item>
            </div>

          </Form>
        </div>
      </Card>
    )
  }
)
