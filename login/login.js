const user = JSON.parse(localStorage.getItem('user')) || {};
const loginBtn = document.querySelector(".login");
const msg=document.querySelector(".msg");

loginBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    const name=document.querySelector(".userName").value;
    const pass=document.querySelector(".pass").value;

    const userName=user.email;
    /* console.log(userName); */
   const userPass=user.pass;
  /*  console.log(userPass); */

if(name === "" || pass === "" ) {
    msg.innerHTML = "Error: All the fields are mandatory";
    msg.style.display = "block";
    msg.style.color = "red";
}
else if(name != userName || pass != userPass){
    msg.innerHTML = "Check Your Username Or Password";
    msg.style.display = "block";
    msg.style.color = "Blue";
}
else{
    msg.innerHTML = "Successfully Login";
    msg.style.display = "block";
    msg.style.color = "Green";
    setTimeout(() => {
        window.location.href = "../shop/index.html";
    }, 1000);
}


});
