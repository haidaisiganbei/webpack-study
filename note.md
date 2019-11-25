## 第一步
    初始化项目
    npm init -y
##  第二步
    安装依赖
    npm install webpack webpack-cli -D
## 第三步
    创建webpack配置文件
    webpack.config.js
## 其他
### 安装webpack开发服务
    作用：在内存中打包，不生成文件；通过端口访问
    npm i webpack-dev-server -D
    在package.json中添加脚本
        "dev":"webpack-dev-server"
    在配置文件中添加devServer:{
        port:8080,
        contentBae:'./build',
        open:true
    }
### html插件
    作用：
    安装：npm i html-webpack-plugin -D
    在webpack配置文件中引入
###  解析css文件
    1.安装css-loader,style-loader
        npm i css-loader style-loader -D
    2.在配置文件中引入
```js
    module.exports = {
     module: {
     rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] }
    ]
    }
```
    3.在index，js中引入css文件
    4.编译，运行
### 抽离css样式到指定文件 
    1.安装mini-css-extract-pligin插件
        npm i mini-css-extract-plugin -D
    2.在配置文件中引入使用
```js
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
         module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader'] },
    ]
  }
```
### 在样式中添加浏览器前缀
1.  安装autoprefixer插件和postcss-loader  
```js
npm i postcss-loader autoprefixer -D
```
2. 在配置文件中引入
```js
rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] },
        ]
```
3. 添加postcss.config.js
```js
module.exports = {
    plugins:[ require('autoprefixer')]
}
```
### 压缩打包后的css文件
1. 下载optimize-css-assets-webpack-plugin插件用于压缩css
2. 下载terser-webpack-plugin用于压缩js
3. 在webpack.config.js中
```js
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  }
```
4.编译打包
### 用babel将ES6语法转成ES5
参考https://www.npmjs.com/package/babel-loader


