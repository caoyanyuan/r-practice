import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

function counterReducer(state = 0, action) {
    const num = action.payload || 1

    switch (action.type) {
        case 'add':
            return state  + num;
        case 'minus':
            return state - num;
        default:
            return state

    }
}

const store = createStore(
    counterReducer,
    applyMiddleware(logger,thunk)
)

export default store