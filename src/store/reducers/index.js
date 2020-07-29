import { combineReducers } from 'redux'

/* Reducers */
import auth from './auth'
import menu from './menu' 
import profile from './profile'
import schedule from './schedule'

export default combineReducers({
  auth,
  menu,
  profile,
  schedule,
})
