
<p align="center">
  <a>
    <img width="220" src="http://opq4i8ll4.bkt.clouddn.com/ego.png">
  </a>
</p>

# Ego 移动端购物商城
> 基于vue2.0 + typescript技术开发的移动端项目


## webapp界面
<p align="center">
  <a>
    <img width="100%" src="http://opq4i8ll4.bkt.clouddn.com/app.png">
  </a>
</p>


## 安装&构建

```
# 安装依赖
npm install

# 开发环境
npm run serve

# 打包项目
npm run build
```

## 项目目标
```
├── README.md                            # 项目说明
├── babel.config.js                      # babel配置文件
├── package-lock.json                    
├── package.json  
├── public                               # 公用目录 （存在首页入口文件、静态资
├── src                                  # 核心代码目录
│   ├── App.vue                          # 组件入口文件
│   ├── api                              # 接口服务
│   ├── assets                           # 静态目录（存放图片，插件等）
│   ├── components                       # 公用组件库
│   ├── config.ts                        # 全局配置项
│   ├── main.ts                          # 项目js入口文件，包括路由配置等
│   ├── registerServiceWorker.ts         # ServiceWorker
│   ├── router                           # 路由配置
│   ├── store                            # vuex状态管理
│   ├── style                            # 公用样式
│   ├── typings                          # 
│   ├── utils                            # 工具库
│   └── views                            # 视图目录
└── tsconfig.json
```