/**
 * Created by wangying on 2016/11/25.
 */
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