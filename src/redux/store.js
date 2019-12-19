import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"

import rootReducer from "./reducers/root-reducer"
const DEV_TOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const middleware = [logger]

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), DEV_TOOLS)
) 
export default store
