import { createStore, applyMiddleware } from "./mRedux"
import { counterReducer } from "./counter"

const store = createStore(
    counterReducer,
    applyMiddleware(logger, thunk)
)

function logger() {
    return dispatch => action => {
        console.log('打印日志', dispatch)
        dispatch(action)
    }
}

function thunk() {
    return dispatch => action => {
        if(typeof action === "function") {
            console.log('thunk', dispatch)
            action(dispatch)
        }
        //return dispatch(action)
    }
}

export default store