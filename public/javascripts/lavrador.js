
var lavrador_tab;

var cc_service;
var cc_custom;
var cc_original;
var cc_set1;
var cc_set2;
var cc_set3;
var cc_set4;


window.onload = function () {
    lavrador_tab = document.getElementById("lavrador_tab")

    cc_service = document.getElementById("cc_service")
    cc_custom = document.getElementById("cc_custom")
    cc_original = ".lavrador.org"
    cc_set1 = document.getElementById("cc_set1")
    cc_set2 = document.getElementById("cc_set2")
    cc_set3 = document.getElementById("cc_set3")
    cc_set4 = document.getElementById("cc_set4")
    
    loadTable();

    setInterval(loadTable, 2000);


    function loadTable() {
        jQuery.ajax({
            url: "/api/custom/lavrador",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var cells = "";
                for (x in res) {
                    cells +=
                    "<tr><td>" + res[x].cc_service + "</td>" +
                    "<td>" + res[x].cc_custom + res[x].cc_original + "</td>" +
                    "<td>" + res[x].cc_set1 + "." + res[x].cc_set2 + "." + res[x].cc_set3 + "." + res[x].cc_set4 + "</td></tr>"

                }
                lavrador_tab.innerHTML = cells;

            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }

} //closing bracket for windows onload



function postLavrador() {
    jQuery.ajax({
        url: "/api/custom/lavrador",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            cc_service: cc_service.value,
            cc_custom: cc_custom.value,
            cc_original: cc_original,
            cc_set1: cc_set1.value,
            cc_set2: cc_set2.value,
            cc_set3: cc_set3.value,
            cc_set4: cc_set4.value
        }),
        success: function (data, status) {
        }
    })

}
