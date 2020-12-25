//引入express
const express=require('express');
//引入bodyparser中间模块
const bodyParser=require('body-parser');
//创建路由器对象
const blogRouter=require('./router/myblog.js');
//创建web服务器
const app=express();
//设置端口
app.listen(8090);
//托管静态资源到public目录
app.use(express.static('./public'));
//使用bodyparser模块，将post请求数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));
//使用路由器路由
app.use('/myblog',blogRouter)