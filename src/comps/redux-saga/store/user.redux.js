const initialState = {
    isLogin: false, loading: false
}
export const user =  (state = initialState, action) => {
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


export function login(uname) {
    return { type: "login", uname };
}