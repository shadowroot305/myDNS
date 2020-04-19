var pool = require('./mysql_con').pool;


/////////GETS\\\\\\\\\\\\\\
module.exports.getWarns = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM warn_rep",

            function(err, result) {
                conn.release();
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getRooms = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM room_rep",

            function(err, result) {
                conn.release();
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getShips = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM ship_rep",

            function(err, result) {
                conn.release();
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

////////////POSTS\\\\\\\\\\\\\\

module.exports.warn_rep = function(warnrep_id, room, hazard, description, crew_member, alert_id, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO warn_rep (warnrep_id, room, hazard, description, crew_member, alert_id) VALUES (?,?,?,?,?,?)", [warnrep_id, room, hazard, description, crew_member, alert_id],
            function(err, results) {
                conn.release();
                if (err) {
                    callback(err, { code: 500, status: "Error in the connection to the database" })
                    return;
                }
                callback(false, { code: 200, status: "ok", data: results })

            })
    })
}

module.exports.room_rep = function(roomrep_id, room, hazard, description, crew_member, alert_id, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("INSERT INTO room_rep (roomrep_id, room, hazard, description, crew_member, alert_id) VALUES (?,?,?,?,?,?)", [roomrep_id, room, hazard, description, crew_member, alert_id],
            function(err, result) {
                conn.release();
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.ship_rep = function(shiprep_id, room, hazard, description, crew_member, alert_id, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("INSERT INTO ship_rep (shiprep_id, room, hazard, description, crew_member, alert_id) VALUES (?,?,?,?,?,?)", [shiprep_id, room, hazard, description, crew_member, alert_id],
            function(err, result) {
                conn.release();
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}