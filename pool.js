//引入mysql模块
const mysql=require('mysql');
//创建连接对象
const pool=mysql.createPool({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'',
	database:'xz',
	connectLimit:'20'
});
module.exports=pool;
