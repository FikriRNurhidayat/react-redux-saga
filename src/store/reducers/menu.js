import actions from '../actions/menu'

export default function(state = [], action) {
  switch(action.type) {
    case actions.SET_STATE:
      return [...action.payload]

    default:
      return state
  }
}
