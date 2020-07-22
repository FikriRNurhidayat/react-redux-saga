import { call, put, takeEvery } from 'redux-saga/effects' 
import getMenu from '../../services/menu'
import actions from '../actions/menu'

export function* GET() {
  const menus = yield call(getMenu)
  yield put({
    type: actions.SET_STATE,
    payload: menus
  })
}

export default function* rootSaga() {
  yield takeEvery(actions.GET, GET)
}
