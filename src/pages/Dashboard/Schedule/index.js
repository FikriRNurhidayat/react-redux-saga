import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Layout from '../../../layouts'

export default connect()(
  ({ dispatch }) => {
    // Did mount
    useEffect(() => {
      dispatch({ type: 'schedule/GET'})
    }, [dispatch])

    return (
      <Layout.Main>
        <h1>Test</h1>
      </Layout.Main>
    )
  }
)
