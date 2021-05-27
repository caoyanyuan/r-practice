import { createStore, applyMiddleware,combineReducers } from "redux"
import { user } from "./user.redux"
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga" 
import logger from "redux-logger"

//1.创建saga中间件并注册
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({user}),
    applyMiddleware(logger, sagaMiddleware)
)
sagaMiddleware.run(mySaga)

export default store