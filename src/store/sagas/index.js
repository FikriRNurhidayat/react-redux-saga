import { all } from 'redux-saga/effects'
import auth from './auth'
import menu from './menu'
import profile from './profile'
import schedule from './schedule'

export default function* rootSaga() {
  yield all([
    auth(),
    menu(),
    profile(),
    schedule(),
  ])
}
