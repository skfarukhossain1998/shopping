const signupBtn = document.querySelector(".signUp");

signupBtn.addEventListener("submit", (event) => {
    event.preventDefault();
const fname=document.querySelector(".fname").value;
const lname=document.querySelector(".lname").value;
const email=document.querySelector(".email").value;
const pass=document.querySelector(".pass").value;
const confpass=document.querySelector(".confpass").value;
const msg=document.querySelector(".msg");

// Create a user object with these values
const user = {
    fname,
    lname,
    email,
    pass 
};

const users={user};

if(user.fname === "" || user.fname === "" || user.email === "" || user.pass === "") {
    msg.innerHTML = "Error: All the fields are mandatory";
    msg.style.display = "block";
    msg.style.color = "red";
    return;
} else if(user.pass !== confpass) {
    msg.innerHTML = "Password and Confirm password not matched.";
    msg.style.display = "block";
    msg.style.color = "Blue";
    return;
} else {
    msg.innerHTML = "Signup successful!";
    msg.style.display = "block";
    msg.style.color = "green";
    // Store the user's state in the local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Show success message and redirect to profile page
    
    setTimeout(() => {
        window.location.href = "../login/login.html";
    }, 1000); // redirect after 1 second

}

});