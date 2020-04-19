
var pool = require('./mysql_con').pool;

module.exports.getAll = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

module.exports.getDns1 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 1", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

module.exports.getDns2 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 2", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

module.exports.getDns3 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 3", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

module.exports.getDns4 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 4", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}
module.exports.getDns5 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 5", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}
module.exports.getDns6 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 6", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}
module.exports.getDns7 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 7", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}
module.exports.getDns8 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 8", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}
module.exports.getDns9 = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM dns_table WHERE dt_id = 9", function (err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}