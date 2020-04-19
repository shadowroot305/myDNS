var pool = require('./mysql_con').pool;

module.exports.update = function (room_id, temp, hum, air, rad, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("UPDATE room_sensor SET temp = ?, hum = ?, air = ?, rad = ? WHERE FK_room_id = ?",
            [temp, hum, air, rad, room_id],

            function (err, result) {
                conn.release();
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}
