var mysql = require('mysql');


var pool  = mysql.createPool({
    connectionLimit : 5,
    host     : 'remotemysql.com',
    user     : process.env.uzer,
    password : process.env.passwd,
    database : process.env.gurl,

    
});

module.exports.pool = pool;
