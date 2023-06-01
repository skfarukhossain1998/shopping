let items=JSON.parse(localStorage.getItem("user"))

const logout=document.getElementById("logout");
const cart=document.getElementById("myCart");
const profile=document.getElementById("profile");

logout.addEventListener("click",check);
cart.addEventListener("click",check);
profile.addEventListener("click",check);

 function check(){
    if (localStorage.getItem("items") === null) {
        alert("Please Login First")
    }
    else{
      localStorage.setItem("user", JSON.stringify([]))
    alert("Logout Successfully")
    }
 }