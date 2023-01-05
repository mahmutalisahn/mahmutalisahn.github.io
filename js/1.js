
document.getElementById("book").setAttribute("onclick","createBooking()");

var numbers=/^[0-9]+$/;

function createBooking(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    var ssnNo = document.getElementById("ssnNo").value;
    let userID = document.getElementById("userID").value;
    let serviceID = document.getElementById("serviceID").value;
    let phoneNo = document.getElementById("phoneNo").value;
    var timeBook = document.getElementById("timeBook").value;
    let dateBook = document.getElementById("dateBook").value;
    let email = document.getElementById("email").value;

    
    var link = "https://26migc.deta.dev/v1/editor_backend/booking_service/?";
    link+="user_id="+userID+"&"+"service_id="+serviceID+"&"+"customer_ssn="+ssnNo+"&"+"customer_email="+email+"&"+"customer_name="+name+"&"+"customer_surname="+surname+"&"+"customer_phone="+phoneNo+"&"+"start_book="+timeBook+":00"+"&"+"date="+dateBook;

    const url = "https://26migc.deta.dev/v1/editor_backend/booking_service/?"
    let xhr = new XMLHttpRequest()
    xhr.open('POST', link, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.onload = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var ourData = JSON.parse(xhr.responseText);
                console.log(ourData);
                document.getElementById("modalContext").innerHTML="<p style='color:green; font-size:25px; font-weight:bold;'>Success</p>";
            }
            else{
                document.getElementById("modalContext").innerHTML="<p style='color:red; font-size:25px; font-weight:bold;'>Failed</p>";
            }
    }
    console.log(url);
    xhr.send();


    console.log(name,surname,ssnNo,userID,serviceID,phoneNo,timeBook,dateBook);
}
