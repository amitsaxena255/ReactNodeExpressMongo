var mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-company',
    password: 'password'
});

module.exports=pool.promise();