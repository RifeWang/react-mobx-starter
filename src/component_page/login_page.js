/**
 * Created by wangying on 2016/11/24.
 */
import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { browserHistory } from 'react-router'
/*import { LoginUrl } from '../global/config'//引入需要调用的API接口*/

const FormItem = Form.Item;

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
        /*//使用ajax与后台通信
        var settings = {
            "url": LoginUrl,
            "method": "POST",
            "data": {
                "user": this.props.form.getFieldsValue().userName,
                "password": this.props.form.getFieldsValue().password
            }
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
            if (response.code==0){
                console.log('--------登录跳转------');
                browserHistory.push('/main-page');
            } else {
                message.error('登录失败,请输入正确的账号密码',2);//antd全局提示组件
            }
        });*/
        browserHistory.push('/');
    };

    render() {
        const { getFieldDecorator  } = this.props.form;
        return (
            <div id="div_login">
                {/*使用箭头函数绑定this*/}
                <Form className="form_login" horizontal onSubmit={e=>this.handleSubmit(e)}>
                    <h1>欢迎登录</h1>
                    <FormItem label="账号">
                        {getFieldDecorator('userName')(
                            <Input placeholder="请输入账户名"/>
                        )}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('password')(
                            <Input type="password" placeholder="请输入密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

Login = Form.create()(Login);

export default Login;
