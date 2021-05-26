import { createStore,combineReducers,applyMiddleware } from "redux"
import user from "./user.redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

const store = createStore(
    combineReducers({user}),
    applyMiddleware(thunk,logger)
)
export default store