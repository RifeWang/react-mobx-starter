/**
 * Created by wangying on 2016/11/25.
 */
import { observable } from 'mobx'
//在数据前加上@observable,此数据即可在组件中动态更新.
class Test_data {
    @observable count=0;
}
const test_data = new Test_data();
export default test_data;