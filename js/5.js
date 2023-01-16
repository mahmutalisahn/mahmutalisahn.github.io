document.getElementById("clientbutton").setAttribute("onclick","logIn()");
document.getElementById("bookButton").setAttribute("onclick","bookAdmin()");
document.getElementById("userStatButton").setAttribute("onclick","userStatAdmin()");
document.getElementById("updateButton").setAttribute("onclick","update()");
document.getElementById("activeStatButton").setAttribute("onclick","active()");

function active(){
    var user = document.getElementById("userID").value;
    var password = document.getElementById("password").value;

    if (user == "admin"){
        if (password == "admin"){
            var link = "https://26migc.deta.dev/v1/editor_backend/user_service/last/";
            let xhr = new XMLHttpRequest()
            xhr.open('GET', link, true)
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
            xhr.onload = function(){
                    if(xhr.readyState == 4 && xhr.status == 200){
                        var ourData = JSON.parse(xhr.responseText);
                        console.log(ourData);
                        var keys = Object.keys(ourData);
                        console.log(Object.values(ourData[keys[0]]));
                                var values = Object.values(ourData[keys[0]]);
                                console.log(Object.keys(ourData[0]));
                                console.log(values);
                                console.log(keys);
                        var tableText ="<table class=\"table table-bordered table-dark\"><thead><tr><th scope=\"col\">Book #</th>";
                        for(var i=0;i<Object.keys(ourData[0]).length;i++){
                            tableText+="<th scope=\"col\">"+Object.keys(ourData[0])[i]+"</th>"
                        }
                        tableText+="</tr></thead><tbody>";
                        for(var i=0;i<keys.length;i++) {
                            var value = Object.values(ourData[keys[i]]);
                            tableText+="<tr><th scope=\"row\">"+(i+1)+"</th>";
                            for(var j=0;j<values.length;j++){
                                tableText+="<td>"+value[j]+"</td>";
                            }
                            tableText+="</tr>";
                        }
                        tableText+="</tbody></table>";
                                document.getElementById("viewTable").innerHTML=tableText;
                    }
                    else{
                        document.getElementById("modalContext").innerHTML="<p style='color:red; font-size:25px; font-weight:bold;'>Failed</p>";
                    }
            }
            xhr.send();
        }
    }

}

function logIn(){
    var user = document.getElementById("userID").value;
    var password = document.getElementById("password").value;

    if (user == "admin"){
        if (password == "admin"){
            var link = "https://26migc.deta.dev/v1/editor_backend/user_service/admin/";
            let xhr = new XMLHttpRequest()
            xhr.open('GET', link, true)
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
            xhr.onload = function(){
                    if(xhr.readyState == 4 && xhr.status == 200){
                        var ourData = JSON.parse(xhr.responseText);
                        console.log(ourData);
                        var keys = Object.keys(ourData);
                        console.log(Object.values(ourData[keys[0]]));
                                var values = Object.values(ourData[keys[0]]);
                                console.log(Object.keys(ourData[0]));
                                console.log(values);
                                console.log(keys);
                        var tableText ="<table class=\"table table-bordered table-dark\"><thead><tr><th scope=\"col\">Book #</th>";
                        for(var i=0;i<Object.keys(ourData[0]).length;i++){
                            tableText+="<th scope=\"col\">"+Object.keys(ourData[0])[i]+"</th>"
                        }
                        tableText+="</tr></thead><tbody>";
                        for(var i=0;i<keys.length;i++) {
                            var value = Object.values(ourData[keys[i]]);
                            tableText+="<tr><th scope=\"row\">"+(i+1)+"</th>";
                            for(var j=0;j<values.length;j++){
                                tableText+="<td>"+value[j]+"</td>";
                            }
                            tableText+="</tr>";
                        }
                        tableText+="</tbody></table>";
                                document.getElementById("viewTable").innerHTML=tableText;
                    }
                    else{
                        document.getElementById("modalContext").innerHTML="<p style='color:red; font-size:25px; font-weight:bold;'>Failed</p>";
                    }
            }
            xhr.send();
        }
    }

}

function bookAdmin(){
    var user = document.getElementById("userID").value;
    var password = document.getElementById("password").value;

    if (user == "admin"){
        if (password == "admin"){
            var link = "https://26migc.deta.dev/v1/editor_backend/booking_service/admin/";
            let xhr = new XMLHttpRequest()
            xhr.open('GET', link, true)
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
            xhr.onload = function(){
                    if(xhr.readyState == 4 && xhr.status == 200){
                        var ourData = JSON.parse(xhr.responseText);
                        console.log(ourData);
                        var keys = Object.keys(ourData);
                        console.log(Object.values(ourData[keys[0]]));
                                var values = Object.values(ourData[keys[0]]);
                                console.log(Object.keys(ourData[0]));
                                console.log(values);
                                console.log(keys);
                        var tableText ="<table class=\"table table-bordered table-dark\"><thead><tr><th scope=\"col\">Book #</th>";
                        for(var i=0;i<Object.keys(ourData[0]).length;i++){
                            tableText+="<th scope=\"col\">"+Object.keys(ourData[0])[i]+"</th>"
                        }
                        tableText+="</tr></thead><tbody>";
                        for(var i=0;i<keys.length;i++) {
                            var value = Object.values(ourData[keys[i]]);
                            tableText+="<tr><th scope=\"row\">"+(i+1)+"</th>";
                            for(var j=0;j<values.length;j++){
                                tableText+="<td>"+value[j]+"</td>";
                            }
                            tableText+="</tr>";
                        }
                        tableText+="</tbody></table>";
                                document.getElementById("viewTable").innerHTML=tableText;
                    }
                    else{
                        document.getElementById("modalContext").innerHTML="<p style='color:red; font-size:25px; font-weight:bold;'>Failed</p>";
                    }
            }
            xhr.send();
        }
    }

}

function userStatAdmin(){
    var user = document.getElementById("userID").value;
    var password = document.getElementById("password").value;

    if (user == "admin"){
        if (password == "admin"){
            var link = "https://26migc.deta.dev/v1/editor_backend/user_service/stat/";
            let xhr = new XMLHttpRequest()
            xhr.open('GET', link, true)
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
            xhr.onload = function(){
                    if(xhr.readyState == 4 && xhr.status == 200){
                        var ourData = JSON.parse(xhr.responseText);
                        console.log(ourData);
                        var keys = Object.keys(ourData);
                        console.log(Object.values(ourData[keys[0]]));
                                var values = Object.values(ourData[keys[0]]);
                                console.log(Object.keys(ourData[0]));
                                console.log(values);
                                console.log(keys);
                        var tableText ="<table class=\"table table-bordered table-dark\"><thead><tr><th scope=\"col\">Book #</th>";
                        for(var i=0;i<Object.keys(ourData[0]).length;i++){
                            tableText+="<th scope=\"col\">"+Object.keys(ourData[0])[i]+"</th>"
                        }
                        tableText+="</tr></thead><tbody>";
                        for(var i=0;i<keys.length;i++) {
                            var value = Object.values(ourData[keys[i]]);
                            tableText+="<tr><th scope=\"row\">"+(i+1)+"</th>";
                            for(var j=0;j<values.length;j++){
                                tableText+="<td>"+value[j]+"</td>";
                            }
                            tableText+="</tr>";
                        }
                        tableText+="</tbody></table>";
                                document.getElementById("viewTable").innerHTML=tableText;
                    }
                    else{
                        document.getElementById("modalContext").innerHTML="<p style='color:red; font-size:25px; font-weight:bold;'>Failed</p>";
                    }
            }
            xhr.send();
        }
    }

}


function update(){
    var user = document.getElementById("userID").value;
    var password = document.getElementById("password").value;

    if (user == "admin"){
        if (password == "admin"){
            var username = document.getElementById("noAdmin").value;
            var new_name = document.getElementById("noAdminPasword").value;
            
            var link = "https://26migc.deta.dev/v1/editor_backend/user_service/update/";
            link += username+"/"+new_name;
            console.log(link)
            let xhr = new XMLHttpRequest()
            xhr.open('POST', link, true)

            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
            xhr.onload = function(){
                    if(xhr.readyState == 4 && xhr.status == 200){
                        var ourData = JSON.parse(xhr.responseText);
                        console.log(ourData);
                        var keys = Object.keys(ourData);
                        console.log(Object.values(ourData[keys[0]]));
                                var values = Object.values(ourData[keys[0]]);
                                console.log(Object.keys(ourData[0]));
                                console.log(values);
                                console.log(keys);
                        var tableText ="<table class=\"table table-bordered table-dark\"><thead><tr><th scope=\"col\">Book #</th>";
                        for(var i=0;i<Object.keys(ourData[0]).length;i++){
                            tableText+="<th scope=\"col\">"+Object.keys(ourData[0])[i]+"</th>"
                        }
                        tableText+="</tr></thead><tbody>";
                        for(var i=0;i<keys.length;i++) {
                            var value = Object.values(ourData[keys[i]]);
                            tableText+="<tr><th scope=\"row\">"+(i+1)+"</th>";
                            for(var j=0;j<values.length;j++){
                                tableText+="<td>"+value[j]+"</td>";
                            }
                            tableText+="</tr>";
                        }
                        tableText+="</tbody></table>";
                                document.getElementById("viewTable").innerHTML=tableText;
                    }
                    else{
                        document.getElementById("modalContext").innerHTML="<p style='color:red; font-size:25px; font-weight:bold;'>Failed</p>";
                    }
            }
            xhr.send();
        }
    }

}

