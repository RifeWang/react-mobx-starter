/**
 * Created by wangying on 2016/11/24.
 */
import React from 'react'
import { Row, Col } from 'antd'

class Abstract extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>前端工程概述</h1>
                <br/>
                <h4>本工程采用的技术架构包括：react、mobx、react-router、antd、npm、webpack、ES6、babel.</h4>
                <br/>
                <ul style={{fontSize:15}}>
                    <ul><pre>--react:         核心框架</pre></ul>
                    <ul><pre>--mobx:          前端工程数据统一管理</pre></ul>
                    <ul><pre>--react-router:  路由跳转（可以理解为页面跳转）</pre></ul>
                    <ul><pre>--antd:          可高度复用的组价库</pre></ul>
                    <ul><pre>--npm:           包管理工具</pre></ul>
                    <ul><pre>--webpack:       打包部署工具</pre></ul>
                    <ul><pre>--ES6:           JavaScript标准</pre></ul>
                    <ul><pre>--babel:         转码工具以兼容浏览器</pre></ul>
                </ul>
                <p>--------------------------------------------------------------------------------------</p>
                <Row>
                    <Col span={8}>
                        <div id="abstract"></div>
                    </Col>
                    <Col span={16}>
                        <div style={{fontSize:15}}>
                            <p>前端工程文件分布示例如图:</p>
                            <br/>
                            <ul >
                                <ul><pre>- public：存放工程所需的一些静态资源，例如图片`img`，样式文件`css`等。</pre></ul>
                                <ul><pre>- global：存放全局性的变量或配置等，例如将与后台通信的`url`集中存放在此处。</pre></ul>
                                <ul><pre>- component_page:存放页面组件，简而言之就是每个页面所对应的容器组件。</pre></ul>
                                <ul><pre>- components：存放具体的组件单元，页面组件一般都是由这些组件单元组合而成。</pre></ul>
                                <ul><pre>- router：存放路由文件，不同的页面对应不同的url并加载对应的页面组件。</pre></ul>
                                <ul><pre>- action：存放组件进行数据操作时具体动作，例如`mobx`中的`@action`方法。</pre></ul>
                                <ul><pre>- data：存放组件与后台通信相关的数据，例如`mobx`中`@observable`监视的数据。</pre></ul>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Abstract;