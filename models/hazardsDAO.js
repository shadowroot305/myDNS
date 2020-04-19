var pool = require('./mysql_con').pool;


///////////////////////GETS\\\\\\\\\\\\\\\\\\\\\\\\
module.exports.getParameters = function(callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM parameter", function(err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

module.exports.getTemp = function(callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM parameter WHERE sensor_id = 1", function(err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

module.exports.getHum = function(callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM parameter WHERE sensor_id = 2", function(err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

module.exports.getAir = function(callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM parameter WHERE sensor_id = 3", function(err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

module.exports.getRad = function(callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("SELECT * FROM parameter WHERE sensor_id = 4", function(err, results) {
            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })
}

///////////////////////UPDATES\\\\\\\\\\\\\\\\\\\\\\\\
module.exports.updateTemp = function(lowhaz, medhaz, highhaz, callback) {
    console.log([lowhaz, medhaz, highhaz])
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("UPDATE parameter SET lowhaz = ?, medhaz = ?, highhaz = ? WHERE sensor_id = 1", [lowhaz, medhaz, highhaz],
            function(err, result) {
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.updateHum = function(lowhaz, medhaz, highhaz, callback) {
    console.log([lowhaz, medhaz, highhaz])
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("UPDATE parameter SET lowhaz = ?, medhaz = ?, highhaz = ? WHERE sensor_id = 2", [lowhaz, medhaz, highhaz],
            function(err, result) {
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.updateAir = function(lowhaz, medhaz, highhaz, callback) {
    console.log([lowhaz, medhaz, highhaz])
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("UPDATE parameter SET lowhaz = ?, medhaz = ?, highhaz = ? WHERE sensor_id = 3", [lowhaz, medhaz, highhaz],
            function(err, result) {
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.updateRad = function(lowhaz, medhaz, highhaz, callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("UPDATE parameter SET lowhaz = ?, medhaz = ?, highhaz = ? WHERE sensor_id = 4", [lowhaz, medhaz, highhaz],
            function(err, result) {
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}