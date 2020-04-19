var pool = require('./mysql_con').pool;


/////////GETS\\\\\\\\\\\\\\
module.exports.getConquistador = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_conquistador", 

       /* conn.query("SELECT * FROM alert, sensor, room WHERE FK_sensor_id = sensor_id AND FK_room_id = room_id ORDER BY alert_id", 
*/
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getPovoador = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_povoador", 

        /*conn.query("SELECT COUNT(*) as all_alerts FROM alert", */
//"SELECT FK_room_id, count(*) as alert_count FROM alert group by FK_room_id order by FK_room_id"
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getGordo = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_gordo", 

        /*conn.query("SELECT COUNT(*) as all_alerts FROM alert", */
//"SELECT FK_room_id, count(*) as alert_count FROM alert group by FK_room_id order by FK_room_id"
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getLavrador = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_lavrador", 

        /*conn.query("SELECT COUNT(*) as all_alerts FROM alert", */
//"SELECT FK_room_id, count(*) as alert_count FROM alert group by FK_room_id order by FK_room_id"
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getBravo= function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_bravo", 

        /*conn.query("SELECT COUNT(*) as all_alerts FROM alert", */
//"SELECT FK_room_id, count(*) as alert_count FROM alert group by FK_room_id order by FK_room_id"
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getJusticeiro= function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_justiceiro", 

        /*conn.query("SELECT COUNT(*) as all_alerts FROM alert", */
//"SELECT FK_room_id, count(*) as alert_count FROM alert group by FK_room_id order by FK_room_id"
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getFormoso= function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_formoso", 

        /*conn.query("SELECT COUNT(*) as all_alerts FROM alert", */
//"SELECT FK_room_id, count(*) as alert_count FROM alert group by FK_room_id order by FK_room_id"
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getVenturoso= function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_venturoso", 

        /*conn.query("SELECT COUNT(*) as all_alerts FROM alert", */
//"SELECT FK_room_id, count(*) as alert_count FROM alert group by FK_room_id order by FK_room_id"
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getDesejado= function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM custom_desejado", 

        /*conn.query("SELECT COUNT(*) as all_alerts FROM alert", */
//"SELECT FK_room_id, count(*) as alert_count FROM alert group by FK_room_id order by FK_room_id"
            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}
/////////POSTS\\\\\\\\\\\\\\
module.exports.postConquistador = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_conquistador (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

module.exports.postPovoador = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_povoador (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

module.exports.postGordo = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_gordo (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

module.exports.postLavrador = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_lavrador (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

module.exports.postBravo = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_bravo (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

module.exports.postJusticeiro = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_justiceiro (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

module.exports.postFormoso = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_formoso (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

module.exports.postVenturoso = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_venturoso (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

module.exports.postDesejado = function(cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO custom_desejado (cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4) VALUES (?,?,?,?,?,?,?)", 
        [cc_service, cc_custom, cc_original, cc_set1, cc_set2, cc_set3, cc_set4],
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

/*
module.exports.getBridgeAlert = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT FK_room_id, count(*) as alert_count FROM alert FK_room_id WHERE FK_room_id = 1", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getDeckAlert = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT FK_room_id, count(*) as alert_count FROM alert FK_room_id WHERE FK_room_id = 2", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getEngineAlert = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT FK_room_id, count(*) as alert_count FROM alert FK_room_id WHERE FK_room_id = 3", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getGalleyAlert = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT FK_room_id, count(*) as alert_count FROM alert FK_room_id WHERE FK_room_id = 4", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getGunDeckAlert = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT FK_room_id, count(*) as alert_count FROM alert FK_room_id WHERE FK_room_id = 5", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getHoldAlert = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT FK_room_id, count(*) as alert_count FROM alert FK_room_id WHERE FK_room_id = 6", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getCabinAlert = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT FK_room_id, count(*) as alert_count FROM alert FK_room_id WHERE FK_room_id = 7", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getSickAlert = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT FK_room_id, count(*) as alert_count FROM alert FK_room_id WHERE FK_room_id = 8", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

////////////POSTS\\\\\\\\\\\\\\
module.exports.postAlert = function(FK_sensor_id, FK_room_id, sensor_value, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
        }
        conn.query("INSERT INTO alert (FK_sensor_id, FK_room_id, sensor_value) VALUES (?,?,?)",
        [FK_sensor_id, FK_room_id, sensor_value],
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
*/
