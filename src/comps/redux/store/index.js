import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { counterReducer } from "./counter"

console.log(counterReducer)

const store = createStore(
    counterReducer,
    applyMiddleware(logger,thunk)
)

export default store