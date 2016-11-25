/**
 * Created by wangying on 2016/11/25.
 */
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