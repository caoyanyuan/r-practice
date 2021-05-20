import React, { Component } from "react"

export default class MyForm extends Component{
    render() {
        return (
            <form className="ant-form ant-form-horizontal">
                { this.props.children }
            </form>

        )
    }
}


MyForm.Item = class extends Component{
    render() {
        console.log(this.props.children)
        return (
            <div className="ant-row ant-form-item">
                { this.props.children }

                <div className="error"></div>
            </div>
        )
    }
}