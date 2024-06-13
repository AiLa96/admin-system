const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'admin_system'
});

connection.connect(err => {
    if (err) throw err;
    console.log('数据库已连接！');
});

module.exports = connection;
