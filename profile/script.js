const user = JSON.parse(localStorage.getItem('user'));

const profile=document.querySelector(".profile");
const editPass=document.querySelector(".editPass");
const firstName= document.querySelector(".fname");
const lastName= document.querySelector(".lname");
const oldPassword=document.querySelector(".oldPass");
const newPassword=document.querySelector(".newPass");
const conPassword=document.querySelector(".confPass");
const change=document.querySelector("#change");
const logout=document.querySelector("#logout");

firstName.value=user.fname;
lastName.value=user.lname;

profile.addEventListener("submit",(event)=>{
event.preventDefault();
user.fname=firstName.value;
user.lname=lastName.value;
firstName.value="";
lastName.value="";
localStorage.setItem("user", JSON.stringify(user))
setTimeout(()=>{
    firstName.value=user.fname;
    lastName.value=user.lname;
},200);
});

change.addEventListener("click", (e)=>{
  e.preventDefault();
  if(oldPassword.value=="" || newPassword.value=="" || conPassword.value=="")
  {
    alert("Error: Please Fill the all field"); 
  }
   else if(oldPassword.value!= user.pass){
    alert("Make Sure that Your Old Password is Correct");
   }

  else if(newPassword.value!= conPassword.value){
  alert("New Password And Confirm Password Missmatch");
  }
   else if(newPassword.value==""){
alert("Please put the New Password Before Saving");
  }
  else if(newPassword.value!="" && newPassword.value== conPassword.value && oldPassword.value== user.pass ){
  user.pass=newPassword.value;

  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));

 alert("Success");
 oldPassword.value="";
 newPassword.value="";
 conPassword.value="";
}
   
});



logout.addEventListener("click",logoutFunction)
function logoutFunction(e){
  e.preventDefault()
    localStorage.setItem("user", JSON.stringify({}))
     window.location.href="../index.html";
 return;
}


