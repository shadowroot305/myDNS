var temp_lowhaz_IN;
var temp_medhaz_IN;
var temp_highhaz_IN;

var hum_lowhaz_IN;
var hum_medhaz_IN;
var hum_highhaz_IN;

var air_lowhaz_IN;
var air_medhaz_IN;
var air_highhaz_IN;

var rad_lowhaz_IN;
var rad_medhaz_IN;
var rad_highhaz_IN;

var Temp_LowHazard;
var Temp_MedHazard;
var Temp_HighHazar;

var Hum_LowHazard;
var Hum_MedHazard;
var Hum_HighHazard;

var Air_LowHazard;
var Air_MedHazard;
var Air_HighHazard;

var Rad_LowHazard;
var Rad_MedHazard;
var Rad_HighHazard;

window.onload = function() {

        temp_lowhaz_IN = document.getElementById("temp_lowhaz_IN");
        temp_medhaz_IN = document.getElementById("temp_medhaz_IN");
        temp_highhaz_IN = document.getElementById("temp_highhaz_IN");

        hum_lowhaz_IN = document.getElementById("hum_lowhaz_IN");
        hum_medhaz_IN = document.getElementById("hum_medhaz_IN");
        hum_highhaz_IN = document.getElementById("hum_highhaz_IN");

        air_lowhaz_IN = document.getElementById("air_lowhaz_IN");
        air_medhaz_IN = document.getElementById("air_medhaz_IN");
        air_highhaz_IN = document.getElementById("air_highhaz_IN");

        rad_lowhaz_IN = document.getElementById("rad_lowhaz_IN");
        rad_medhaz_IN = document.getElementById("rad_medhaz_IN");
        rad_highhaz_IN = document.getElementById("rad_highhaz_IN");

        Temp_LowHazard = document.getElementById("Temp_LowHazard");
        Temp_MedHazard = document.getElementById("Temp_MedHazard");
        Temp_HighHazard = document.getElementById("Temp_HighHazard");

        Hum_LowHazard = document.getElementById("Hum_LowHazard");
        Hum_MedHazard = document.getElementById("Hum_MedHazard");
        Hum_HighHazard = document.getElementById("Hum_HighHazard");

        Air_LowHazard = document.getElementById("Air_LowHazard");
        Air_MedHazard = document.getElementById("Air_MedHazard");
        Air_HighHazard = document.getElementById("Air_HighHazard");

        Rad_LowHazard = document.getElementById("Rad_LowHazard");
        Rad_MedHazard = document.getElementById("Rad_MedHazard");
        Rad_HighHazard = document.getElementById("Rad_HighHazard");

        loadTemp();
        loadHum();
        loadAir();
        loadRad();

        //ADDED VALIDATION STUFF BELOW
        temp_lowhaz_IN.max = 100
        temp_medhaz_IN.max = 100
        temp_highhaz_IN.max = 100

        hum_lowhaz_IN.max = 100
        hum_medhaz_IN.max = 100
        hum_highhaz_IN.max = 100

        air_lowhaz_IN.max = 100
        air_medhaz_IN.max = 100
        air_highhaz_IN.max = 100

        rad_lowhaz_IN.max = 10000
        rad_medhaz_IN.max = 10000
        rad_highhaz_IN.max = 10000


        //validation temperature
        temp_medhaz_IN.min = temp_lowhaz_IN.value;
        if (temp_medhaz_IN.value < temp_lowhaz_IN.value) {
            temp_medhaz_IN.value == temp_lowhaz_IN.value
        }

        temp_highhaz_IN.min = temp_highhaz_IN.value;
        if (temp_highhaz_IN.value < temp_medhaz_IN.value) {
            temp_highhaz_IN.value == temp_medhaz_IN.value
        }

        //validation humidity
        hum_medhaz_IN.min = hum_lowhaz_IN.value;
        if (hum_medhaz_IN.value < hum_lowhaz_IN.value) {
            hum_medhaz_IN.value == hum_lowhaz_IN.value
        }

        hum_highhaz_IN.min = hum_highhaz_IN.value;
        if (hum_highhaz_IN.value < hum_medhaz_IN.value) {
            hum_highhaz_IN.value == hum_medhaz_IN.value
        }

        //validation air
        air_medhaz_IN.min = air_lowhaz_IN.value;
        if (air_medhaz_IN.value < air_lowhaz_IN.value) {
            air_medhaz_IN.value == air_lowhaz_IN.value
        }

        air_highhaz_IN.min = air_highhaz_IN.value;
        if (air_highhaz_IN.value < air_medhaz_IN.value) {
            air_highhaz_IN.value == air_medhaz_IN.value
        }

        //validation rad
        rad_medhaz_IN.min = rad_lowhaz_IN.value;
        if (rad_medhaz_IN.value < rad_lowhaz_IN.value) {
            rad_medhaz_IN.value == rad_lowhaz_IN.value
        }

        rad_highhaz_IN.min = rad_highhaz_IN.value;
        if (rad_highhaz_IN.value < rad_medhaz_IN.value) {
            rad_highhaz_IN.value == rad_medhaz_IN.value
        }
        //ADDED VALIDATION STUFF ABOVE

    } //closing bracket for windows onload


// GETS BELOW: This loads the current hazard to the table
function loadTemp() {
    jQuery.ajax({
        url: "/api/hazards/temp",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(res, status) {
            console.log(status);
            var lowhaz_html = "";
            var medhaz_html = "";
            var highhaz_html = "";

            for (x in res) {
                lowhaz_html += res[x].lowhaz
                medhaz_html += res[x].medhaz
                highhaz_html += res[x].highhaz
            }
            /*
            Temp_LowHazard.innerHTML = lowhaz_html;
            Temp_MedHazard.innerHTML = medhaz_html;
            Temp_HighHazard.innerHTML = highhaz_html;
            */
            temp_lowhaz_IN.defaultValue = lowhaz_html;
            temp_medhaz_IN.defaultValue = medhaz_html;
            temp_highhaz_IN.defaultValue = highhaz_html;


        }
    })
}

function loadHum() {
    jQuery.ajax({
        url: "/api/hazards/hum",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(res, status) {
            console.log(status);
            var lowhaz_html = "";
            var medhaz_html = "";
            var highhaz_html = "";

            for (x in res) {
                lowhaz_html += res[x].lowhaz
                medhaz_html += res[x].medhaz
                highhaz_html += res[x].highhaz
            }
            /*
            Hum_LowHazard.innerHTML = lowhaz_html;
            Hum_MedHazard.innerHTML = medhaz_html;
            Hum_HighHazard.innerHTML = highhaz_html;
            */
            hum_lowhaz_IN.defaultValue = lowhaz_html;
            hum_medhaz_IN.defaultValue = medhaz_html;
            hum_highhaz_IN.defaultValue = highhaz_html;
        }
    })
}

function loadAir() {
    jQuery.ajax({
        url: "/api/hazards/air",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(res, status) {
            console.log(status);
            var lowhaz_html = "";
            var medhaz_html = "";
            var highhaz_html = "";

            for (x in res) {
                lowhaz_html += res[x].lowhaz
                medhaz_html += res[x].medhaz
                highhaz_html += res[x].highhaz
            }
            /*/
            Air_LowHazard.innerHTML = lowhaz_html;
            Air_MedHazard.innerHTML = medhaz_html;
            Air_HighHazard.innerHTML = highhaz_html;
            */
            air_lowhaz_IN.defaultValue = lowhaz_html;
            air_medhaz_IN.defaultValue = medhaz_html;
            air_highhaz_IN.defaultValue = highhaz_html;
        }
    })
}

function loadRad() {
    jQuery.ajax({
        url: "/api/hazards/rad",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(res, status) {
            console.log(status);
            var lowhaz_html = "";
            var medhaz_html = "";
            var highhaz_html = "";

            for (x in res) {
                lowhaz_html += res[x].lowhaz
                medhaz_html += res[x].medhaz
                highhaz_html += res[x].highhaz
            }
            /*
            Rad_LowHazard.innerHTML = lowhaz_html;
            Rad_MedHazard.innerHTML = medhaz_html;
            Rad_HighHazard.innerHTML = highhaz_html;
            */
            rad_lowhaz_IN.defaultValue = lowhaz_html;
            rad_medhaz_IN.defaultValue = medhaz_html;
            rad_highhaz_IN.defaultValue = highhaz_html;
        }
    })
}
// GETS ABOVE: This loads the current hazard to the table


// UPDATES BELOW: This updates the value and loads such value on sucess
function updateTemp() {
    jQuery.ajax({
            url: "/api/hazards/temp/",
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify({
                lowhaz: temp_lowhaz_IN.value,
                medhaz: temp_medhaz_IN.value,
                highhaz: temp_highhaz_IN.value
            }),
            success: function(data, status) {
                alert("Temperature Hazard Parameter Set")
                loadTemp();
            }
        })
        // ajax sucess function  :   window.location="/.html"   danilo n fabio uWork retrieved
}

function updateHum() {
    jQuery.ajax({
        url: "/api/hazards/hum/",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify({
            lowhaz: hum_lowhaz_IN.value,
            medhaz: hum_medhaz_IN.value,
            highhaz: hum_highhaz_IN.value
        }),
        success: function(data, status) {
            alert("Humidity Hazard Parameter Set")
            loadHum();

        }
    })

}

function updateAir() {
    jQuery.ajax({
        url: "/api/hazards/air/",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify({
            lowhaz: air_lowhaz_IN.value,
            medhaz: air_medhaz_IN.value,
            highhaz: air_highhaz_IN.value
        }),
        success: function(data, status) {
            alert("Air Hazard Parameter Set")
            loadAir();
        }
    })

}

function updateRad() {
    jQuery.ajax({
        url: "/api/hazards/rad/",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify({
            lowhaz: rad_lowhaz_IN.value,
            medhaz: rad_medhaz_IN.value,
            highhaz: rad_highhaz_IN.value
        }),
        success: function(data, status) {
            alert("Radiation Hazard Parameter Set")
            loadRad();
        }
    })

}
// UPDATES ABOVE: This updates the value and loads such value on sucess