
var bravo_tab;

var cc_service;
var cc_custom;
var cc_original;
var cc_set1;
var cc_set2;
var cc_set3;
var cc_set4;




window.onload = function () {
    bravo_tab = document.getElementById("bravo_tab")

    cc_service = document.getElementById("cc_service")
    cc_custom = document.getElementById("cc_custom")
    cc_original = ".bravo.org"
    cc_set1 = document.getElementById("cc_set1")
    cc_set2 = document.getElementById("cc_set2")
    cc_set3 = document.getElementById("cc_set3")
    cc_set4 = document.getElementById("cc_set4")
    
    loadTable();
    loadCommand1();

    setInterval(loadTable, 2000);


    function loadTable() {
        jQuery.ajax({
            url: "/api/custom/bravo",
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
                bravo_tab.innerHTML = cells;

            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }

    domain_string = '" "'
    forward_file = '"/etc/bind/db.forward.net"'
    reverse_file = '"/etc/bind/db.reverse.com"'
    
    function loadCommand1() {
        jQuery.ajax({
            url: "/api/custom/bravo",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }
                var cmd = "";
                for (x in res) {
                    cmd +=

                    //db.forward.net
                    "cat db.forward.net; echo ';\n" +
                    "; BIND data file for local loopback interface\n"+
                    ";\n"+
                    "$TTL	604800\n"+
                    "@	IN	SOA	"+ res[x].cc_custom + res[x].cc_original+". root.localhost. (\n"+
                    "                 2		; Serial\n"+
                    "            604800		; Refresh\n"+
                    "             86400		; Retry\n"+
                    "           2419200		; Expire\n"+
                    "            604800 )	; Negative Cache TTL\n"+
                    ";\n"+
                    "@	IN	NS	"+res[x].cc_custom + res[x].cc_original+".\n"+
                    "ns	IN	A	"+ res[x].cc_set1 + "." + res[x].cc_set2 + "." + res[x].cc_set3 + "." + res[x].cc_set4+"\n"+
                    "server	IN	A	"+res[x].cc_set1 + "." + res[x].cc_set2 + "." + res[x].cc_set3 + "." + res[x].cc_set4+"' > db.forward.net;\n"+
                    
                    //db.reverse.net                  
                    "cat db.reverse.net; echo ';\n"+
                    "; BIND reverse data file for local loopback interface\n"+
                    ";\n"+
                    "$TTL	604800\n"+
                    "@	IN	SOA	"+res[x].cc_custom + res[x].cc_original+". root.localhost. (\n"+
			        "1		    ; Serial\n"+
			        "604800		; Refresh\n"+
			        "86400		; Retry\n"+
			        "2419200	; Expire\n"+
			        "604800 )	; Negative Cache TTL\n"+
                    ";\n"+
                    "@	IN	NS	ns.\n"+
                    res[x].cc_set4+"	IN	PTR	ns."+res[x].cc_custom + res[x].cc_original+".\n"+
                    res[x].cc_set4+"	IN	PTR	server."+res[x].cc_custom + res[x].cc_original+".' > db.reverse.net;\n"+
                    
                    //named.conf.local
                    "cat named.conf.local; \n"+
                    "echo 'zone	'"+ res[x].cc_custom + res[x].cc_original +"'	{ \n"+
                    "    type master;\n"+
                    "    file '/etc/bind/db.forward.net';\n"+
                    "};\n"+
                    "\n"+
                    "zone	'"+ res[x].cc_set3+"."+ res[x].cc_set2 + "." + res[x].cc_set1 +".in-addr.arpa'	{\n"+
                    "    type master;\n"+
                    "    file '/etc/bind/db.reverse.net';\n"+
                    "};' > named.conf.local;\n"+
                    "cat resolv.conf; echo 'nameserver " + res[x].cc_set1 + "." + res[x].cc_set2 + "." + res[x].cc_set3 + "." + res[x].cc_set4+'\n'+
                     'domain '+ res[x].cc_set1 + "." + res[x].cc_set2 + "." + res[x].cc_set3 + "." + res[x].cc_set4+'\n'+
                     'search ' + res[x].cc_set1 + "." + res[x].cc_set2 + "." + res[x].cc_set3 + "." + res[x].cc_set4+"'> resolv.conf"+'\n'

                }
                term.innerHTML = cmd;
    
            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }

} //closing bracket for windows onload



function postBravo() {
    jQuery.ajax({
        url: "/api/custom/bravo",
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
