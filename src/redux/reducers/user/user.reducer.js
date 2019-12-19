import { UserActionTypes } from "../../actions/user/user.types"

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...initialState,
        currentUser: action.payload
      }
    default:
      return initialState
  }
}

export default userReducer
