# adminFramework

## Project setup
## 安装赖
```
npm install
```

### Compiles and hot-reloads for development
### 启动服务
```
npm run serve
```

### Compiles and minifies for production
### 打包发到正式环境
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### 提示warning delete ·· (prettier/prettier) 可执行
```
npm run lint -- --fix
 
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录结构

```
├── dist                                         #打包文件
├── node_modules                                 #依赖文件
├── public                                       #静态资源文件-public放别人家js文件（也就是不会变动）
     ├── static                                  #静态资源
          ├──css                                 #样式图片
              ├──fonts                                 #图标文件
              ├──quill                                 #富文本编辑器样式
              ├──themes                                 #主题
                  ├──blue                                 #红色主题
                  ├──style                                 #自定义主题样式    
          ├──img                                 #图片文件。  
          ├──js                                  #JS文件。
             ├──lisbs                            #第三方库。
                 ├──axios.js                            #主要做ajax处理的
                 ├──element-ui.js                            #element-ui主题库
                 ├──quill.js                            #富文本编辑器库
          ├──updata                              #上传图片地址  注：后台要按功能建目录-并按时间建文件添加在功能目录文件里。    
          ├──measurement                         #测试图片地址   注：止文件为测试图片 可以删除    
    ├──index.html                                     #views下所有路由页面-index.html
    ├──user.html                                     #pang-user所有路由页面-user.html		       
├── src                                          #源码目录
    ├── assets                                   #静态资源-assets放自己写的js文件（需要改动的文件）
         ├──img                                  #图片文件  
         ├──js                                   #JS文件 
            ├──api                                   #接口文
            ├──common                                   #共用文件
                ├──langs                                   #语言  
                     ├──en.js                                   #英文  
                     ├──en.js                                   #中文 
               ├──ajax.js                                  #ajax共用方法实现请求后台数据 
               ├──AMap.js                                  #谷德地图  
               ├──BMap.js                                  #百度地图  
               ├──config.js                                  #公用配置文件 
               ├──instance.js                                  #接口拦截处理   
               ├──map.js                                  #地图公用方法  
               ├──theme.js                                  #主题处理  
               ├──tool.js                                  #工具类方法       
	├── components                               #组件文件夹，自己写的组件都放在这个文件夹下
			├── pulic                            #公用页面组件
			     ├── footer.vue                            #页脚
			     ├── head.vue                              #页头
			     ├── left.vue                              #业务系统功能导航
			     ├── sidebar.vue                           #业务系统导航
			     ├── Main.vue                              #中间主体框架
			     ├── tag.vue                              #面包屑导航
	├──pages                                     #多页面处理
	    ├── user                                 #多页面处理-所有路由页面	
	        ├──views                                     #所有路由页面
	            ├──index.vue                                     #首页
	            ├──personal.vue                                     #个人信息
	        ├──main.js                                   #程序入口文件，加载各种公共组件
	        ├──router.js                                 #路由	  			
	├──views                                     #所有路由页面
	    ├──warehouse                                     #仓库
	    ├──product                                     #产品		
	    ├──management                                     #管理		 
	├──App.vue                                   #页面入口文件主体框架	
	├──main.js                                   #程序入口文件，加载各种公共组件	                                  
	├──router.js                                 #路由
	├──store.js                                  #状态控制
├── .browserslistrc                              #ES6语法编译配置
├── .eslintrc.js                                 #代码编写规格
├── .gitignore                                   #忽略的文件
├── package.json                                 #项目及工具的依赖配置文件
├── package-lock.json                            #锁定安装时的包的版本号-保证其他人在npm install时大家的依赖能保证一致。
├── postcss.config.js                            #配置，将px转化成rem
├── README.md                                    #说明
├── vue.config.js                                #配置
```
