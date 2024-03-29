import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { d_login } from "./store/user.redux"
import { login } from "../redux-saga/store/user.redux"

export class Login extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        username: "xxx"
    }
    login = () => {
        console.log(this.props.d_login())
        console.log(this.props.t_login)
    }
    onChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        let { isLogin, location } = this.props

        if(isLogin) {
            return <Redirect to={location.state.redirect} />
        }
        return (
            <div>
                <input value={this.state.username} onChange={this.onChange}></input>
                <button onClick={this.login}>登录</button>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({
    isLogin: state.user.isLogin
})

const mapDispatchToProps = {
    t_login: () => ({type: 'requestLogin'}),
    d_login
}

const LoginSaga = connect(
    state => ({isLogin: state.user.isLogin}),
    {
        login: () => ({type: 'loginSuccess'})
    }
)(
    function({isLogin, location, login}){
        if(isLogin) return <Redirect to={location.state.redirect} />
        return (
            <div>
                登录界面
                <button onClick={() => login('tom')}>登录</button>
            </div>
        )
    }
)


//export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginSaga


