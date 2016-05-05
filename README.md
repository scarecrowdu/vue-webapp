# webapp
``` bash
移动端H5积分商城项目

vue
vue-ruoter
vue-resource
webpack
````

## 示例
<p><img src="gif/demo.gif" width="100%" height="100%"></p>


## 运行

``` bash
npm install or cnpm install [前提安装了淘宝源](http://npm.taobao.org/)
````

``` bash
如遇到node-sass 安装失败或者编译失败提示node-sass 
重新安装 cnpm install node-sass@3.4.2
node-sass@3.4.2 跟packag.json 里面是相同的版本
````

``` bash
npm run dev   ----- localhost:8080  
npm run ip    ----- 本机ip:9000
npm run build ----- 打包项目
````

## 目录结构
<pre>

│  .gitattributes
│  .gitignore               # 忽略无需git控制的文件  比如 node_modules
│  favicon.ico
│  index.html               # 首页
│  index.tpl                # 首页模板
│  package.json             # 项目配置
│  README.md                # 项目说明
│  webpack.config.js        # webpack 配置文件
│ 
├─dist                      #上线文件 
│  
├─src                       
│  │  app.js                # 启动配置，配置路由，过滤器
│  │  App.vue               # 主vue
│  │  routers.js            # 路由
│  │  
│  ├─assets                 # 静态文件
│  │  ├─css
│  │  ├─images
│  │  └─scss
│  │          
│  ├─components             # 组件
│  ├─view                   # 样式 
│  └─views                  # 页面
│           
└─test                      # 测试
        
</pre>