/**
 * Created by wangying on 2016/11/25.
 */
import React from 'react'

class Npm_tutorial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>npm介绍</h1>
                <br/>
                <p>npm是JavaScript工程的包管理工具。
                    <a href="https://www.npmjs.com/">npm官网</a>
                </p>
                <br/>
                <p>npm具体的使用方法不多赘述,需要注意的是版本前的^符号代表兼容版本,也就是大版本,请谨慎使用.</p>
            </div>
        )
    }
}
export default Npm_tutorial;