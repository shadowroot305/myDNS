var mysql = require('mysql');


var pool  = mysql.createPool({
    connectionLimit : 5,
    host     : 'remotemysql.com',
    user     : "u1B9qAGPD8",
    password : "8Nzc8IYyWC",
    database : "u1B9qAGPD8",
});

module.exports.pool = pool;
