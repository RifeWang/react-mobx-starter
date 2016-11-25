/**
 * Created by wangying on 2016/11/24.
 */
import React from 'react'
import { Row, Col, Menu, Icon, Button } from 'antd'
import { Link } from 'react-router'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Main_page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current: '/',
        }
    }

    handleClick=(e)=> {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render(){
        const { children } = this.props;
        return(
            <Row>
                <Col span={4}>
                    <Menu onClick={this.handleClick}
                          style={{ width: 220,height: 100+'vh' }}
                          defaultOpenKeys={['/']}
                          selectedKeys={[this.state.current]}
                          mode="inline"
                          theme="light"
                    >
                        <Menu.Item key="/">
                            <Link to="/" style={{textAlign:'center'}}>前端工程概述</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="setting" /><span>前端架构详情</span></span>}>
                            <Menu.Item key="/react">
                                <Link to="/react">关于react</Link>
                            </Menu.Item>
                            <Menu.Item key="/npm">
                                <Link to="/npm">关于npm</Link>
                            </Menu.Item>
                            <Menu.Item key="/antd">
                                <Link to="/antd">关于antd</Link>
                            </Menu.Item>
                            <Menu.Item key="/mobx">
                                <Link to="/mobx">关于mobx</Link>
                            </Menu.Item>
                            <Menu.Item key="/webpack">
                                <Link to="/webpack">关于webpack</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>多级导航样式一</span></span>}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="Item 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>多级导航样式二</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub4" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <Menu.Item key="/login">
                            <Link to="/login" style={{textAlign:'center'}}>退出登录</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={20} style={{marginLeft: 237,marginTop:-97+'vh'}}>
                    { children }
                </Col>
            </Row>
        )
    }
}
export default Main_page;