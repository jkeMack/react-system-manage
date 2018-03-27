# react-system-manage

基于react、react-router、ant-design搭建的react管理后台版本

## 前言

为了熟悉react框架，然后给公司项目搭一个启动项目，参考[vue-manage-system](https://github.com/lin-xin/vue-manage-system) 项目的代码结构和基础功能搭建了这个管理后台项目。项目中封装了基础的crud表格组件和可配置化的基础表单和配置化的模态框表单。使用react-BMap插件写了地图使用的示例，使用echarts插件写了数据统计示例页。

## 功能

- [x] Ant Design
- [x] 登录/注销
- [x] 表格
- [x] 表单
- [x] 图表 📊
- [x] 富文本编辑器
- [x] markdown编辑器

## 目录结构介绍

```
|-- build                            // 项目打包路径
|-- config                           // webpack配置文件
|-- public                           // 公共文件
|-- pictures                         // 后台管理截图展示图片
|-- src                              // 源码目录
|   |-- assets                       // 图片文件
|   |-- common                   // 公共组件
|           |-- baseForm             // 公用配置表单
|           |-- baseModalForm        // 公用配置模态框表单
|           |-- breadcrumb           // 面包屑组件
|	|-- components                   // 主要路由页面
|           |-- configForm      	 // 基础配置表单的使用
|           |-- crudDemo 	         // 基础crud表格应用
|           |-- editor               // 富文本编辑器
|           |-- home 	          	 // 页面整体结构布局页
|           |-- index                // 展示首页
|           |-- login                // 登录页
|           |-- markdown             // markdown编辑展示
|           |-- statistics           // 图表展示页
|   |-- App.js                       // 页面入口文件
|   |-- index.js                     // 程序入口文件，加载各种公共组件
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明
```

## 安装步骤

```
git clone https://github.com/ConstantineL/react-system-manage.git      // 把模板下载到本地
cd react-system-manage    // 进入模板目录
npm install         // 安装项目依赖，等待安装完成之后
```

## 本地开发

```
// 开启服务器，浏览器访问 http://localhost:3000
npm start 
```

## 构建生产

```
// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```

## 组件使用说明与演示

### Ant Design

一套基于react的桌面组件库。访问地址：[Ant Design](https://ant.design/index-cn)

### react-lc-editor

基于react的富文本编辑器插件。访问地址[react-lc-editor](https://github.com/leejaen/react-lz-editor)

### react-BMap

基于react封装的百度地图插件。访问地址[react-BMap](https://github.com/huiyan-fe/react-bmap)

### react-markdown

基于react的markdown解析插件。访问地址[react-markdown](https://github.com/rexxars/react-markdown)

## 项目截图

![图片一](https://github.com/ConstantineL/react-system-manage/blob/develop/pictures/1.png)

![图片二](https://github.com/ConstantineL/react-system-manage/blob/develop/pictures/2.png)

![图片三](https://github.com/ConstantineL/react-system-manage/blob/develop/pictures/3.png)