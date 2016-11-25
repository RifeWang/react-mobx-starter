/**
 * Created by wangying on 2016/11/25.
 */
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