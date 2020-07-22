import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import capitalize from '../../../helpers/capitalize'

export default withRouter(
  (props => {
    const { location } = props
    const { last } = location.pathname.split('/')

    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/dashboard/home">
            Dashboard
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          { capitalize(last) }
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  })
)
