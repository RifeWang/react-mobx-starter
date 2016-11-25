/**
 * Created by wangying on 2016/11/25.
 */
import React from 'react'

class Antd_tutorial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>antd介绍</h1>
                <br/>
                <p>antd是由阿里巴巴的蚂蚁金服前端团队基于react打造的一套优秀的组件库.
                    <a href="https://ant.design/">antd官网</a>
                </p>
                <br/>
                <p>antd官方提供了优秀的组件、完整的API文档、甚至前端开发设计的规范和模式,其早已广泛应用于生产实践当中,是我们前端开发的不二之选.</p>
                <p>更多antd的相关内容请自行去官网查阅.</p>
            </div>
        )
    }
}
export default Antd_tutorial;