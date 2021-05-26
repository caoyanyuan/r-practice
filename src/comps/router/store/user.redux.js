const initialState = {
    isLogin: false, loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "requestLogin": 
            return { isLogin: false, loading: true };
        case "loginSuccess":
            return { isLogin: true, loading: false };
        case "loginFail":
            return { isLogin: true, loading: false };
        default:
            return state
    }
}

export function d_login(username) {
    return dispatch => {
        console.log(username)

        dispatch({type: 'requestLogin'})

        setTimeout(() => {
            if(username === 'tom') {
                dispatch({ type: 'loginSuccess' })
            }else{
                dispatch({ type:  'loginFail' })
            }
        }, 1000)
    }
}