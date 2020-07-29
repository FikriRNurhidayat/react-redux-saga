import { put } from 'redux-saga/effects'

export default action => payload => put({
  type: action.SET_STATE,
  payload
})
