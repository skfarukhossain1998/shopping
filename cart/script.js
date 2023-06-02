const cartSection=document.querySelector("#cart-section")

let cartItems=JSON.parse(localStorage.getItem("cart"))
console.log(cartItems)

//function for calculating total price------------------------------->
function calculateTotal(){
    let totalPrice=0
 cartItems.map((item) => {
    totalPrice+= item.price
   
});
/* let user=JSON.parse(localStorage.getItem("user"))
user.totalPrice=totalPrice.toFixed(2)

localStorage.setItem("user", JSON.stringify(user)) */

document.getElementById("total-price").innerHTML = "$"+totalPrice.toFixed(2);
}
calculateTotal()

//function for rendering cart items on screen----------------------------------------->
function renderCartSection(){
    const searchHTML = cartItems.map((item) => renderItems(item));
    document.getElementById("cart-items").innerHTML =  searchHTML.join("");
}
renderCartSection()

//function to show items on list-------------------------------------------------------->
function renderList(){
    const searchHTML_2 = cartItems.map((item) => renderPrice(item));
    document.getElementById("list-items").innerHTML  =  searchHTML_2.join("");
}
renderList()

//function for rendering items on screen--------------------------------------->
function renderItems(item) {
    return `
   <div class="item">
   <div id="img-div">
   <img src=${item.image} alt="Item" />
   </div>
     <div class="info" id="info-div">
     <div class="title">${item.title}</div>
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
   <button id="addBtn" onclick="removeItems(${item.id})">Remove from cart</button>
   </div>
  </div>`;
  }

  //function for rendering items in bill--------------------------------->
  function renderPrice(item){

    return`
    <div id="itemOfList"> 
    <div>${item.title.slice(0, 20)}...</div>
    <div>$${item.price}</div>

    </div>
    `
  }

  //function for removing items from cart----------------------------------------->
  function removeItems(id){
   cartItems=cartItems.filter((item)=>{
        console.log("id")
        return item.id != id
    })
    
    localStorage.setItem("cart",JSON.stringify(cartItems))
    renderCartSection()
    renderList()
    calculateTotal()
  }

  //redirecting to the payments page---------------------------->
  const payBtn=document.getElementById("pay-btn");
  payBtn.addEventListener("click",check);
  let cart=JSON.parse(localStorage.getItem("cart"));
  function check()
  {
    /* if(localStorage.getItem("cart") === "[]") */
    if (localStorage.getItem("cart") === "[]") {
        alert("Please Purchase Something")
        window.location.href="../shop/index.html"
        
    }
    else{
    alert("The items were purchased")
    window.location.href="../razorpay/index.html"
    }
    /* console.log("working");
    if ((localStorage.getItem("cart"))!="[]") {

      console.log("Item Exist");
  
  }
  else{
    console.log("Item Not exist");
  } */
    
  };
  /* For Logging Out and null the user */
const logout=document.getElementById("logout");
logout.addEventListener("click",loggingOff);
function loggingOff()
{
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