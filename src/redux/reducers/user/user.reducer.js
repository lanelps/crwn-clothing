const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...initialState,
        currentUser: action.payload
      }
    default:
      return initialState
  }
}

export default userReducer
