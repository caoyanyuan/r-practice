import React, { Component } from "react"
import { Button, Input } from "antd"
import MyForm from "./MyForm"


function FormCreate(Comp) {

    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {}

            this.option = {}
        }
        handleChange = e => {
            let { name, value } = e.target
            this.setState({
                [name]: value
            }, () => {
                this.validateField(name)
            })

        }
        getFieldDecorator = (field, option) => {
            this.option[field] = option

            return InputComp => {
                return (
                    <div>
                        {
                            React.cloneElement(InputComp, {
                                name: field,
                                value: this.state[field] || "",
                                onChange: this.handleChange
                            })
                        }
                        <span>{this.state[field+'Error']}</span>
                    </div>
                )
            }
        }
        validateField(field) {
            const { rules } = this.option[field]

            let ret = rules.every(rule => {
                let flag = true
                if(rule.required) {
                    flag = this.state[field]
                }

                if(!flag) {
                    this.setState({
                        [field+'Error']: rule.msg
                    })
                }

                return flag
            })

            if(ret) {
                this.setState({
                    [field+'Error']: ""
                })
            }
            return ret
            
        }
        validateFields = (cb) => {
            let flag = true
            Object.keys(this.option).forEach(field => {
                if(!this.validateField(field)) {
                    flag = false
                }   
               
            })

           cb(flag, this.state) 
        }
        render() {
            return (
                <Comp 
                    getFieldDecorator={this.getFieldDecorator} 
                    validateFields={this.validateFields}
                ></Comp>
            )
        }
    }
}

class NormalLoginForm extends Component{
    handleSubmit = () => {
        this.props.validateFields((error, data) => {
            console.log(error, data)
        })
    }
    render() {
        const { getFieldDecorator } = this.props
        return (
            <MyForm className="login-form">
                <MyForm.Item>
                {
                    getFieldDecorator('username', {
                        rules: [
                            { required: true, msg: "xxx" }
                        ]
                    })(<Input placeholder="username" />)
                }
                </MyForm.Item>
                <MyForm.Item>
                 {
                    getFieldDecorator('keyword', {
                        rules: [
                            { required: true, msg: "xxx" }
                        ]
                    })(<Input placeholder="password" />)
                }
                </MyForm.Item>
                <Button onClick={this.handleSubmit}>提交</Button>
            </MyForm>
        )
    }
}

export default FormCreate(NormalLoginForm)