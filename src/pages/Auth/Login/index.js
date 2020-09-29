import React from 'react'
import { Space, Typography } from 'antd'

import Layout from '../../../layouts'
import Form from '../../../views/components/Form'

const { Title } = Typography

export default () => (
  <Layout.Auth>
    <Space align="center" direction="vertical" size="large">
      <Title level={4}>Welcome to Binar Legacy App!</Title>
      <Form.Login />
    </Space>
  </Layout.Auth>
)
