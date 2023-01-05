document.getElementById("findBooking").setAttribute("onclick","find_Booking()");

function find_Booking(){
    var booking = document.getElementById("userID").value;

    var link = "https://26migc.deta.dev/v1/editor_backend/user_service/";
    link+=booking
    console.log(link);
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
                        console.log(values);
                
                        var restext="";
                
                        for(var i=0;i<keys.length;i++){
                            restext+="<p>"
                            var value = Object.values(ourData[keys[i]]);
                            restext+="<h3>"+keys[i]+": ";
                            for(var j=0;j<values.length;j++){
                                restext+=value[j]+" ";
                            }
                            restext+="</h3></p>";
                        }
                        console.log(restext);
                        document.getElementById("modalContext").innerHTML= restext;
            }
            else{
                document.getElementById("modalContext").innerHTML="<p style='color:red; font-size:25px; font-weight:bold;'>Failed</p>";
            }
    }
    xhr.send();
}
