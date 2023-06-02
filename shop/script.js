//Filter buttons-------------------------------------------------------------------------------------------->
const allFilter = document.querySelector("#all-btn");
const mensFilter = document.querySelector("#mens-btn");
const womensFilter = document.querySelector("#womens-btn");
const jewelleryFilter = document.querySelector("#jewellery-btn");
const electronicsFilter = document.querySelector("#electronics-btn");

//different sections---------------------------------------------------------------------------------------->
const mensSection = document.querySelector("#mens-section");
const womensSection = document.querySelector("#womens-section");
const jewellerySection = document.querySelector("#jewellery-section");
const electronicsSection = document.querySelector("#electronics-section");
const searchSection = document.querySelector("#searched-section");

const search = document.querySelector("#searchBar");




let men = []; 
let women = []; 
let jewelery = [];
let electronics = []; 
let response = [];
let myCartArray = []; 

let temp=JSON.parse(localStorage.getItem("cart")) //used for store the items which clicked
if(temp){
  myCartArray=temp
}

//add to cart function-------------------------------------------------------------------------------------->
function addToCart(itemId) {
  let temp = response.filter((item) => {
    return item.id == itemId;
  });
  
  myCartArray.push(temp[0]);
  localStorage.setItem("cart", JSON.stringify(myCartArray));
}

//fetching api---------------------------------------------------------------------------------------------->
fetchAPI("https://fakestoreapi.com/products");
async function fetchAPI(url) {
  try {
    let data = await fetch(url);
    console.log(data); // getting response 
    response = await data.json(); 
    console.log(response); //getting  all the data

    men = response.filter((item) => {
      return item.category == "men's clothing";
    });
    console.log(men); //Mens item stores in the array

    jewelery = response.filter((item) => {
      return item.category == "jewelery";
    });
    console.log(jewelery); //jwealery item stores in the array

    electronics = response.filter((item) => {
      return item.category == "electronics";
    });
    console.log(electronics); //electronics item stores in the array

    women = response.filter((item) => {
      return item.category == "women's clothing";
    });
    console.log(women);//Womens item stores in the array

    showAll();
  } 
  
  catch (error) {
    console.log("error-msg" + error);
  }
}

//allFilter function---------------------------------------------------------------------------------------->
allFilter.addEventListener("click", showAll);
function showAll() {
  allFilter.classList.add("active");
  searchSection.classList.add("hide-class");

  const allSections = [
    mensSection,
    womensSection,
    jewellerySection,
    electronicsSection,
  ];
  allSections.forEach((section) => section.classList.remove("hide-class"));

  const allFilters = [
    mensFilter,
    womensFilter,
    jewelleryFilter,
    electronicsFilter,
  ];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML_1 = men.map((item) => {
    return renderItems(item);
  });
  document.getElementById("mens-items").innerHTML = myHTML_1.join("");

  const myHTML_2 = women.map((item) => {
    return renderItems(item);
  });
  document.getElementById("womens-items").innerHTML = myHTML_2.join("");

  const myHTML_3 = jewelery.map((item) => {
    return renderItems(item);
  });
  document.getElementById("jewellery-items").innerHTML = myHTML_3.join("");

  const myHTML_4 = electronics.map((item) => {
    return renderItems(item);
  });
  document.getElementById("electronics-items").innerHTML = myHTML_4.join("");
}

//mensFilter function--------------------------------------------------------------------------------------->
mensFilter.addEventListener("click", showMensClothings);
function showMensClothings() {
  mensSection.classList.remove("hide-class");
  mensFilter.classList.add("active");

  const allSections = [womensSection, jewellerySection, electronicsSection];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [
    allFilter,
    womensFilter,
    jewelleryFilter,
    electronicsFilter,
  ];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML = men.map((item) => {
    return renderItems(item);
  });
  document.getElementById("mens-items").innerHTML = myHTML.join("");
}

//womesFilter function-------------------------------------------------------------------------------------->
womensFilter.addEventListener("click", showWomensClothings);
function showWomensClothings() {
  womensSection.classList.remove("hide-class");
  womensFilter.classList.add("active");

  const allSections = [mensSection, jewellerySection, electronicsSection];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [
    allFilter,
    mensFilter,
    jewelleryFilter,
    electronicsFilter,
  ];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML = women.map((item) => {
    return renderItems(item);
  });
  document.getElementById("womens-items").innerHTML = myHTML.join("");
}

//jewelleryFilter function---------------------------------------------------------------------------------->
jewelleryFilter.addEventListener("click", showJewellery);
function showJewellery() {
  jewellerySection.classList.remove("hide-class");
  jewelleryFilter.classList.add("active");

  const allSections = [mensSection, womensSection, electronicsSection];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [allFilter, mensFilter, womensFilter, electronicsFilter];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML = jewelery.map((item) => {
    return renderItems(item);
  });
  document.getElementById("jewellery-items").innerHTML = myHTML.join("");
}

//electronicsFilter function---------------------------------------------------------------------------------->
electronicsFilter.addEventListener("click", showElectronics);
function showElectronics() {
  electronicsSection.classList.remove("hide-class");
  electronicsFilter.classList.add("active");

  const allSections = [mensSection, jewellerySection, womensSection];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [allFilter, mensFilter, jewelleryFilter, womensFilter];
  allFilters.forEach((section) => section.classList.remove("active"));

  const myHTML = electronics.map((item) => {
    return renderItems(item);
  });
  document.getElementById("electronics-items").innerHTML = myHTML.join("");
}

//search function------------------------------------------------------------------------------------------->
search.addEventListener("input", searchItems);
function searchItems() {
  const searchTerm = search.value.toLowerCase();
  let searchResults = response.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  const allSections = [
    mensSection,
    womensSection,
    jewellerySection,
    electronicsSection,
  ];
  allSections.forEach((section) => section.classList.add("hide-class"));

  const allFilters = [
    allFilter,
    mensFilter,
    womensFilter,
    jewelleryFilter,
    electronicsFilter,
  ];
  allFilters.forEach((section) => section.classList.remove("active"));
  
  
console.log(searchResults)


  if (searchTerm !== "") {
   
    const searchHTML = searchResults.map((item) => renderItems(item));
    document.getElementById("searched-items").innerHTML = searchHTML.join("");
    searchSection.classList.remove("hide-class");
  } else {
    document.getElementById("searched-items").innerHTML = "No items found";
    // document.getElementById("searched-section").classList.add("hide-class");
  }
  if(searchResults.length==0){
    document.getElementById("searched-items").innerHTML = "No items found";
  
    }
}


/* const searchHTML = resultsArr.map((item) => renderItems(item));
document.getElementById("searched-items").innerHTML = searchHTML.join("");
searchSection.classList.remove("hide-class"); */

//render function------------------------------------------------------------------------------------------->
function renderItems(item) {
   //  <div class="title">${item.title}</div>  after div class info
  return `
 <div class="item">
 <div id="img-div">
 <img src=${item.image} alt="Item" />
 </div>
   <div class="info" id="info-div">
   <div class="title">${item.title.slice(0,42)}...</div>
   <div class="row">
     <div class="price">$${item.price}</div>
     <div class="sized">S,M,L</div>
   </div>
   <div class="colors">
     Colors:
     <div class="row">
       <div class="circle" style="background-color: #000"></div>
       <div class="circle" style="background-color: #4938af"></div>
       <div class="circle" style="background-color: #203d3e"></div>
     </div>
   </div>
   <div class="row">Rating: ${item.rating.rate}⭐</div>
 </div>
  <div id="btn-div">
 <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
 </div>
</div>`;
}
/* For Logging Out and null the user */
const logout=document.getElementById("logout");
logout.addEventListener("click",loggingOff);
function loggingOff(event)
{
  event.preventDefault();
  if (localStorage.getItem("user") === "[]") {
    alert("Please Login First")
    window.location.href="../shop/index.html"
    
}
else{
localStorage.setItem("user", JSON.stringify([]))
alert("Logout Successfull")
window.location.href="../index.html"
}
}

/* For Cart and null the user */
const myCart=document.getElementById("myCart");
myCart.addEventListener("click",cart_item);
function cart_item(event)
{
  event.preventDefault();
  if (localStorage.getItem("user") === "[]") {
    alert("Please Login First")
    localStorage.setItem("cart", JSON.stringify([]))
    window.location.href="../shop/index.html"
    
}
else{
window.location.href="../cart/index.html"
}
}

/* For profile and null the user */
const profile=document.getElementById("profile");
profile.addEventListener("click",pro);
function pro(event)
{event.preventDefault();
  if (localStorage.getItem("user") === "[]") {
    alert("Please Login First")
    window.location.href="../shop/index.html"
    
}
else{
window.location.href="../profile/index.html";
}
}

/* If there is value then dont go to login and signup */
/* const login_btn=document.querySelector('#login_id');
login_btn.addEventListener("click",login_check);
function login_check()
{
  if (localStorage.getItem("user") === "[]") {
    alert("Please Login First")
    window.location.href="../login/login.html"
    
}
else{
window.location.href="../profile/index.html";
}
}
 */

/* For login and null the user */
const login_btn=document.getElementById("login_id");
login_btn.addEventListener("click",log_check);
function log_check(event) {
  event.preventDefault(); // Prevent default action
  
  if (localStorage.getItem("user") === "[]") {
    window.location.href = "../login/login.html";
  } else {

    alert("You are already in your Account");
  }
}
/* For signup and null the user */

const signup=document.getElementById("singUp");
signup.addEventListener("click",sign_check);
function sign_check(event) {
  event.preventDefault(); // Prevent default action
  
  if (localStorage.getItem("user") === "[]") {
    window.location.href = "../signup/signup.html";
  } else {
    alert("You are already in your Account");
  }
}
 
 
 
