//引入mysql模块
const mysql = require('mysql');
//创建连接池
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'xz',
  connectionLimit: 15
});
//把创建好的连接池导出
module.exports = pool;