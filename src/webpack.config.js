
module.exports = {
    entry: {
        routerCtrl: './router/routerCtrl.js'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                // loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
                loader: "babel",//不同写法,同注释部分作用相同
                query: {//不同写法,同注释部分作用相同
                    presets: ["react", "es2015", "stage-0"],
                    plugins: [//mobx的转码插件
                        "transform-decorators-legacy",
                        "transform-class-properties"
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test:/\.(png)|(jpg)$/,
                loader: "url"
            }

        ]
    }
};