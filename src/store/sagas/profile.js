import { all, takeEvery, call, select } from 'redux-saga/effects' 
import service from '../../services/profile'
import action from '../actions/profile'
import createSetState from '../../helpers/setState'

const setState = createSetState(action)

function* GET_FULLNAME() {
  yield setState({ isLoading: true })
  const email = yield select(state => state.profile.email)
  const { data: { result } } = yield call(service.getFullname, email)
  yield setState({ fullname: result, isLoading: false })
}

export default function* rootSaga() {
  yield all([
    takeEvery(action.GET_FULLNAME, GET_FULLNAME)
  ])
}
