import React from "react"
import { Button, Form,Input } from "antd"


class NormalLoginForm extends React.Component {
    state = {
        formModel: {
            username: 'cyy',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
       
        this.props.form.validateFields((err, value) => {
            console.log(err, value)
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        let { formModel } = this.state
        
        return (
            <Form>
                <Form.Item > 
                    {
                       getFieldDecorator('username', {
                           rules: [
                               { required: true }
                           ],
                           initialValue: formModel.username
                       })(<Input placeholder="请输入用户名" />)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password', {
                            rules: [
                                { required: true }
                            ],
                        })(<Input placeholder="请输入用户名" type="password" />)
                    }
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={this.handleSubmit}
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrapperLoginForm = Form.create({ name: 'normal_login' })(
    NormalLoginForm
)
export default WrapperLoginForm