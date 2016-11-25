/**
 * Created by wangying on 2016/11/25.
 */
import React from 'react'
import Mobx_test from './mobx_test'

const code_data=`
import { observable } from 'mobx'
//在数据前加上@observable,此数据即可在组件中动态更新.
class Test_data {
    @observable count=0;
}
const test_data = new Test_data();
export default test_data;
`;
const code_action=`
import { action } from 'mobx'
import state from '../data/mobx_test_data'
//在动作前加上@action即可在组件中调用此处定义的方法.
class Test_action {
    @action add=()=>{
        state.count++;
    }
}
const test_action = new Test_action();
export default test_action;
`;
const code_component=`
import React from 'react'
import { observer } from 'mobx-react'
import test_action from '../action/mobx_test_action'
import test_data from '../data/mobx_test_data'

//在使用mobx分离的数据时,此类前需要加上@observer以动态更新数据.
@observer
class Mobx_test extends React.Component{
    //组件state数据放到了mobx_test_data.js中.
    constructor(props){
        super(props);
    }

    add=()=>{
        //不再直接操作数据,而是调用action中定义的方法.
        test_action.add();
    };

    render(){
        return(
            <div>
                <h3>mobx-test</h3>
                <p>此处的数据来自mobx_test_data.js中:<span style={{color:'red',fontSize:20}}>{test_data.count}</span></p>
                <button onClick={this.add}>点击加一</button>
            </div>
        )
    }
}
export default Mobx_test;//暴露组件以供外部调用,不需要可不写.
`;

class Mobx_tutorial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>mobx介绍</h1>
                <br/>
                <p>mobx是一个简单方便的数据管理包,我们可以通过mobx更科学合理的构建react前端工程。
                    <a href="https://mobxjs.github.io/mobx/">mobx官网</a>
                </p>
                <br/>
                <p>以下通过mobx将数据和动作从react介绍里构建的组件中分离。</p>
                <p>-----------------------分隔符----------组件演示----------------</p>
                <Mobx_test />
                <p>-----------------------分隔符----------组件演示----------------</p>
                <br/>
                <p>---------------------------------------</p>
                <p>mobx_test_data.js:</p>
                <pre>{code_data}</pre>
                <br/>
                <p>---------------------------------------</p>
                <p>mobx_test_action.js:</p>
                <pre>{code_action}</pre>
                <br/>
                <p>---------------------------------------</p>
                <p>mobx_test.js:</p>
                <pre>{code_component}</pre>
            </div>
        )
    }
}
export default Mobx_tutorial;