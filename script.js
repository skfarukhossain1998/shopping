// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

const loginbtn=document.querySelector(".login");
const signupbtn=document.querySelector(".signup");

signupbtn.addEventListener("click",()=>{
   
    signup();  
});

loginbtn.addEventListener("click",()=>{
   
    login();  
});

function signup(){
    
    window.location.href="./signup/signup.html"
}

function login(){
    
    window.location.href="./login/login.html"
}