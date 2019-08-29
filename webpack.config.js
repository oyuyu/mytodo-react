const path =require('path')     //node.js的path模块处理路径信息

const config={
    mode:'development',     //环境  1.生产环境  2.开发环境
    //    ????
    
    // path.resolve用来拼接文件多级目录
    // webpack打包的入口文件  _dirname当前文件所在全路径地址
    entry: path.resolve(__dirname,'src/index.jsx'),
    // webpack打包后的出口文件
    output:{
        //webpack会自动把最新的源代码编译到dist/main.js中
        path:path.resolve(__dirname,'dist'),   //出口文件的路径
        filename: 'main.js'   //出口文件名
    },
   
    // filename: '[name].js'   //出口文件名
    // 定义module指示webpack如何编译代码
    module:{
        rules:[{
            test: /\.(js|jsx)$/,  //匹配所有的js文件\
            exclude:/node_modules/,       //忽略node_modules下的所有js文件
            // use:{
            //     loader:'babel-loader',    //定义loader  使用bable-loader  用来做js代码转化
            //     options:{
            //         // presets:['@babel/preset-env']
            //         plugins:['transform-class-properties']       //babel-plugin-transform-class-properties  允许在类中定义属性
            //     }
            // }
            loader: 'babel-loader'
        },
        //antd配置样式
        {
            test: /\.css$/,
              use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
              ]
        },

        //antd样式处理
        // {
        //     test: /\.(css|less)$/,
        //     // exclude: /node_modules/,
        //     use: [
        //          { loader: 'style-loader' },
        //          {
        //             loader: 'css-loader',
        //             // options:{ importLoader:1 }
        //             options: {
        //                 sourceMap: true,
        //                 modules: true,
        //                 localIdentName: '[local].[hash:8]'
        //             }
        //         },
        //         {
        //             loader: 'postcss-loader',
        //             options: {
        //                 ident: 'postcss',
        //                 plugins: () => [postcssPresetEnv()]
        //             }
        //         },
        //         {
        //             loader: 'less-loader',
        //             options: {
        //                 javascriptEnabled: true
        //             }
        //         }
        //     ]
        // },
    ]
    },
    // "start": "webpack-dev-server --config webpack.config.js",
    devServer: {
        port: '8002',
        disableHostCheck: true,
              contentBase: './dist',
              hot: true,
              historyApiFallback: {
                  disableDotRule: true
              },
              stats: "errors-only",
      },
    // 为方便调试定义devtool   开发模式
    devtool:'inline-source-map'

        
}

module.exports=config