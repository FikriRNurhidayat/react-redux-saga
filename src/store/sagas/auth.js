import { all, takeEvery, call, put } from 'redux-saga/effects' 
import decode from 'jwt-decode'
import { message } from 'antd'
import { setAuthToken } from '../../config/axios'
import service from '../../services/auth'
import action from '../actions/auth'
import createSetState from '../../helpers/setState'

const setState = createSetState(action)

function setAuthenticated(isAuthenticated) {
  return setState({
    isAuthenticated
  })
}

function* CHECK_TOKEN({ payload: accessToken }) {
  try {
    yield call(service.checkToken)
    const { email } = decode(accessToken)
    yield put({
      type: 'profile/SET_STATE',
      payload: {
        email
      }
    })
    yield setAuthenticated(true)
  }

  catch(err) {
    yield setAuthenticated(false)
  }
}

function* LOGOUT() {
  localStorage.removeItem('accessToken')
  yield setAuthenticated(false)
}

function* LOGIN({ payload }) {
  yield setState({ isLoading: true })
  try {
    payload.email = payload.email.toLowerCase()
    const { data } = yield call(service.login, payload)
    const accessToken = data.result.access_token
    localStorage.setItem('accessToken', accessToken)
    setAuthToken(accessToken)
    yield setAuthenticated(true)
  }
  catch(err) {
    message.error(err.response.data.errors, 3)
  }
  yield setState({ isLoading: false })
}

export default function* rootSaga() {
  yield all([
    takeEvery(action.CHECK_TOKEN, CHECK_TOKEN),
    takeEvery(action.LOGIN, LOGIN),
    takeEvery(action.LOGOUT, LOGOUT),
  ])
}
