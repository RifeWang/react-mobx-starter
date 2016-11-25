/**
 * Created by wangying on 2016/11/25.
 */
import React from 'react'

const code = `
module.exports = {
    entry: {//入口文件
        routerCtrl: './router/routerCtrl.js'
    },
    output: {//打包后的输出文件
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                //js和jsx文件打包
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015", "stage-0"],//react和ES6
                    plugins: [//mobx的插件
                        "transform-decorators-legacy",
                        "transform-class-properties"
                    ]
                }
            },
            {
                //css样式文件打包
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                //图片打包
                test:/\.(png)|(jpg)$/,
                loader: "url"
            }

        ]
    }
};

`;
class Webpack_tutorial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>webpack介绍</h1>
                <br/>
                <p>webpack是前端工程打包部署的重要工具。
                    <a href="http://webpack.github.io/docs/">webpack官网</a>
                </p>
                <br/>
                <p>以下是一个webpack的配置示例。</p>
                <p>webpack.config.js:</p>
                <pre>{code}</pre>
            </div>
        )
    }
}
export default Webpack_tutorial;