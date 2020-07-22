import { all } from 'redux-saga/effects'
import menu from './menu'

export default function* rootSaga() {
  yield all([
    menu()
  ])
}
