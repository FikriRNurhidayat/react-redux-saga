import actions from '../actions/auth'

const initialState = {
  isLoading: false,
  isAuthenticated: undefined
}

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
