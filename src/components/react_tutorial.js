/**
 * Created by wangying on 2016/11/25.
 */
import React from 'react'
import Hello from './hello'

const code =`
import React from 'react'
class Hello extends React.Component{
    //按照ES6的语法,传统的getInitialState函数不再使用,组件state数据定义则放到了constructor构造函数中.
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    //注意：除了组件本身特有的方法外，自定义的方法一律使用箭头函数以确保this的绑定.
    add=()=>{
        this.setState({
            count: this.state.count+1
        });
    };

    render(){
        return(
            <div>
                <h3>hello world</h3>
                <p>定义的状态数据:<span style={{color:'red',fontSize:20}}>{this.state.count}</span></p>
                <button onClick={this.add}>点击加一</button>
            </div>
        )
    }
}
export default Hello;//暴露组件以供外部调用,不需要可不写.
`;
class React_tutorial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>react介绍</h1>
                <br/>
                <p>react是目前异常火爆的前端框架，其虚拟DOM、组件化、服务端渲染等特点可谓是前端的一次飞跃。
                    <a href="https://facebook.github.io/react/">react官网</a>
                </p>
                <br/>
                <p>以下的是结合ES6和jsx语法构建的一个简单组件。</p>
                <br/>
                <p>-----------------------分隔符----------组件演示----------------</p>
                <Hello/>
                <p>-----------------------分隔符----------组件演示----------------</p>
                <br/>
                <p>代码如下:</p>
                <pre>{code}</pre>
            </div>
        )
    }
}
export default React_tutorial;