import { call, put, takeEvery } from "redux-saga/effects";

const UserService = {
    login(uname) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(uname == 'tom') {
                    resolve({ id: 1, name: 'tom' })
                }else{
                    reject('用户名错误')
                }
            })
        })
    }
}

// worker saga
function* login(action) {
    try{
        yield put({type: 'requestLogin'})
        const result = yield call(UserService.login, action.uname)
        yield put({type: 'loginSuccess',  result})
    }catch{
        yield put({type: 'loginFail'})
    }
}

function* mySaga() {
    takeEvery('login', login)
}

export default mySaga