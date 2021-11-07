# XuanChuan_app
宣传部内部社区app，练手用

## 预定技术栈
前端：react+redux
后端：koa+mysql

## 启动方法
npm run start
本地访问页面：127.0.0.1:3005

## 预期项目目录
目录说明
│ .babelrc #babel配置文件
│ package-lock.json
│ package.json
│ README.MD
│ webpack.config.js #webpack生产配置文件
│ webpack.dev.config.js #webpack开发配置文件
│
├─dist
├─public #公共资源文件
└─src #项目源码
│ index.html #index.html模板
│ index.js #入口文件
│
├─component #组件库
│ └─Hello
│ Hello.js
│
├─pages #页面目录
│ ├─Counter
│ │ Counter.js
│ │
│ ├─Home
│ │ Home.js
│ │
│ ├─Page1
│ │ │ Page1.css #页面样式
│ │ │ Page1.js
│ │ │
│ │ └─images #页面图片
│ │ brickpsert.jpg
│ │
│ └─UserInfo
│ UserInfo.js
│
├─redux
│ │ reducers.js
│ │ store.js
│ │
│ ├─actions
│ │ counter.js
│ │ userInfo.js
│ │
│ ├─middleware
│ │ promiseMiddleware.js
│ │
│ └─reducers
│ counter.js
│ userInfo.js
│
└─routes #路由文件
Bundle.js
router.js