var x = document.getElementById("farmerbutton1").setAttribute("onclick","showSomething()");

function showSomething(){
    const context="<p>You can see me now</p>";
    const par = document.createElement("p");
    par.textContent = context;
    document.getElementById("modalContext1").insertAdjacentHTML("beforeend",context);
}
