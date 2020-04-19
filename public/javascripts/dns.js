
var dns1;
var dns2;
var dns3;
var dns4;
var dns5;
var dns6;
var dns7;
var dns8;
var dns9;


window.onload = function () {
    var dns1 = document.getElementById("dns1")
    var dns2 = document.getElementById("dns2")
    var dns3 = document.getElementById("dns3")
    var dns4 = document.getElementById("dns4")
    var dns5 = document.getElementById("dns5")
    var dns6 = document.getElementById("dns6")
    var dns7 = document.getElementById("dns7")
    var dns8 = document.getElementById("dns8")
    var dns9 = document.getElementById("dns9")

    loadDns1();
    loadDns2();    
    loadDns3();    
    loadDns4();    
    loadDns5();    
    loadDns6();    
    loadDns7();    
    loadDns8();    
    loadDns9();

    function loadDns1() {
        jQuery.ajax({
            url: "/api/dns/1",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns1.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
    function loadDns2() {
        jQuery.ajax({
            url: "/api/dns/2",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns2.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
    function loadDns3() {
        jQuery.ajax({
            url: "/api/dns/3",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns3.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
    function loadDns4() {
        jQuery.ajax({
            url: "/api/dns/4",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns4.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
    function loadDns5() {
        jQuery.ajax({
            url: "/api/dns/5",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns5.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
    function loadDns6() {
        jQuery.ajax({
            url: "/api/dns/6",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns6.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
    function loadDns7() {
        jQuery.ajax({
            url: "/api/dns/7",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns7.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
    function loadDns8() {
        jQuery.ajax({
            url: "/api/dns/8",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns8.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
    function loadDns9() {
        jQuery.ajax({
            url: "/api/dns/9",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var card = "";
                for (x in res) {
                    card =
                    "<span>" + res[x].dt_name + "</span>"
                }
                dns9.innerHTML = card;
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }




} //closing bracket for windows onload
/*
function warn_rep() {
    jQuery.ajax({
        url: "/api/reports/warn_reps",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            warnrep_id: 7,
            room: room_wrep.value,
            hazard: hazard_wrep.value,
            description: description_wrep.value,
            crew_member: crew_member_wrep.value,
            alert_id: 7,

        }),
        success: function (data, status) {
            alert("Report Submitted.")
            //jQuery('#warn_rep').modal('close');
        }
    })

}
*/