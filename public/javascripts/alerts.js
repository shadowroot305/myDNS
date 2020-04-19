
window.onload = function () {
    var alert_data = document.getElementById("alert_data")

    loadAlerts();

    setInterval(loadAlerts, 1000);

    function loadAlerts() {
        jQuery.ajax({
            url: "/api/alerts/",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }

                var table = "";
                for (x in res) {

                    table +=
                        "<tr><th>" + res[x].alert_id + " </th>" +
                        "<td>" + res[x].room_name + " </td>" +
                        "<td>" + res[x].sensor_type + " </td>" +
                        "<td>" + res[x].sensor_value + " " + res[x].sensor_unit + "</td>" +
                        "<td>" + res[x].timestamp + "</td></tr>"
                }

                alert_data.innerHTML = table;

                current_data = res;

            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
} //closing bracket for windows onload
