import { all, takeEvery, call } from 'redux-saga/effects' 
import service from '../../services/schedule'
import action from '../actions/schedule'
import createSetState from '../../helpers/setState'

const setState = createSetState(action)

function* GET() {
  try {
    yield setState({ isLoading: true })
    const { data: { result } } = yield call(service.getSchedules)
    yield setState({ list: result.schedule, isLoading: false })
  }

  catch(err) {
    console.log(err.response.data)
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(action.GET, GET)
  ])
}
