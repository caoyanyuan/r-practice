import {  BrowserRouter,Route,Redirect } from "./my-router"
import React from "react"
import Login from "./Login"
import { connect } from "react-redux"

// export default function index(props) {
//     const loading = props.loading
//     return (
//         <div>
//             <BrowserRouter>
//                 <Route path="/test" component={() => "test"}></Route>
//                 <Route path="/" render = { props => loading ? "加载中。。。" : "加载好了" }></Route>
//             </BrowserRouter>
//         </div>
//     )
// } 
export default function TryRoute(props) {
    return (
        <div>
            <BrowserRouter>
                <PrivateRoute path="/test" component={Test}></PrivateRoute>
                <Route path="/login" component={Login}></Route>
            </BrowserRouter>
        </div>
    )
}

class Test extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                我的test
                <Route path="/test/child" render={() => "child"}></Route>
            </div>
        )
    }
}

const PrivateRoute = connect(state => ({
        isLogin: state.user.isLogin,
}))(function({component: Component, isLogin, ...rest}) {
    return (
        <Route {...rest} render={
            props => isLogin ? <Component {...props } /> :  
            <Redirect to={{ 
                pathname: "/login", 
                state: {redirect: props.location.pathname
                }}} />
        }></Route>
    )
})