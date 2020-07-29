import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthToken } from '../../../config/axios'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(
  props => {
    const { children, dispatch, isAuthenticated, authorizedOnly = false } = props
    const token = localStorage.getItem('accessToken')
    if (!token && authorizedOnly) return (<Redirect to="/login" />)

    // For authorized only children
    if (isAuthenticated && authorizedOnly) return children 
    if (isAuthenticated === false && authorizedOnly) return <Redirect to="/login" />

    // For unauthorized only children
    if (isAuthenticated === false && !authorizedOnly) return children 
    if (isAuthenticated === true && !authorizedOnly) return <Redirect to="/dashboard/home" />

    setAuthToken(token)
    dispatch({ type: 'auth/CHECK_TOKEN', payload: token })

    return <Fragment />
  }
)
