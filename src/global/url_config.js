/**
 * Created by wangying on 2016/11/24.
 */
import { CarUrl } from '../global/config'
module.exports = {
    user_manage_url:{
        delete_url: CarUrl+'/car/userManage/deleteUser',
        find_url: CarUrl+'/car/userManage/findUser',
        update_url: CarUrl+'/car/userManage/updateUser',
        add_url: CarUrl+'/car/userManage/addUser',
    }
};