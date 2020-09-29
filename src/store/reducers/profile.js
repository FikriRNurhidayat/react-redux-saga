import actions from '../actions/profile'

const initialState = {
  isLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
