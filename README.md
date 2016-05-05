# webapp
移动端H5积分商城 (vue+vue-ruoter+webpack) 

## 运行

``` bash
npm install
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