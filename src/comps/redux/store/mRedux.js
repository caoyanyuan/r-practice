
export function createStore(reducer, enhancer) {

    if(enhancer) {
        return enhancer(createStore)(reducer)
    }

    let currentState, listeners = [];

    function getState() {
        return currentState
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)

        listeners.map(fn => fn())
    }
    function subscribe(fn){
        listeners.push(fn)
    }

    dispatch({type: 'abcdefg'})

    return {
        getState, dispatch, subscribe
    }
}

export function applyMiddleware(...middlewares){
    return createStore => reducer => {
        const store = createStore(reducer)
        const mdiApi = {
            getState: store.getState,
            dispatch: store.dispatch
        }
        const middlewareChain = middlewares.map(mw => mw(mdiApi))
        let dispatch = compose(...middlewareChain)(store.dispatch)

        return {
            ...store,
            dispatch
        }
    }
}

export function compose(...funcs) {
    if (funcs.length === 0) {
      return arg => arg;
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    // 聚合函数数组为一个函数 [fn1,fn2] => fn2(fn1())
    return funcs.reduce((left, right) => (...args) => right(left(...args)));
  }
  