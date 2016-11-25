/**
 * Created by wangying on 2016/11/24.
 */
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Login from '../component_page/login_page'
import Main_page from '../component_page/main_page'

import 'antd/dist/antd.css'
import '../../public/css/login.css'
import '../../public/css/nav_top_logo.css'
import '../../public/css/abstract.css'

import Abstract from '../components/abstract'
import Npm_tutorial from '../components/npm_tutorial'
import Webpack_tutorial from '../components/webpack_tutorial'
import React_tutorial from '../components/react_tutorial'
import Antd_tutorial from '../components/antd_tutorial'
import Mobx_tutorial from '../components/mobx_tutorial'

ReactDom.render(
    <Router history={browserHistory}>
        <Route component={Main_page}>
            <Route path='/' component={Abstract} />
            <Route path='/react' component={React_tutorial} />
            <Route path='/npm' component={Npm_tutorial} />
            <Route path='/antd' component={Antd_tutorial} />
            <Route path='/mobx' component={Mobx_tutorial} />
            <Route path='/webpack' component={Webpack_tutorial} />
        </Route>
        <Route path='/login' component={Login} />
    </Router>,
    document.getElementById('root')
);