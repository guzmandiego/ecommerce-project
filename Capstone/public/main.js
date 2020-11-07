// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn70nhqRZJMZdmewqa-FY-d30lnrmEjyE",
  authDomain: "smashultimate-b0ea7.firebaseapp.com",
  databaseURL: "https://smashultimate-b0ea7.firebaseio.com",
  projectId: "smashultimate-b0ea7",
  storageBucket: "smashultimate-b0ea7.appspot.com",
  messagingSenderId: "28725099600",
  appId: "1:28725099600:web:bdbe882edf912ed1c3e555",
  measurementId: "G-LQCD9NGS3K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Global Variables
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

// PRODUCT DIVS
var coffeeDiv = document.getElementById('coffeeDiv');
var eggsDiv = document.getElementById('eggsDiv');
var sandwichesDiv = document.getElementById('sandwichDiv');
var wafflesDiv = document.getElementById('wafflesDiv');

//DATA
var coffee = [
  {name:'Hot Coffee' , price:3.00},
  {name:'Iced Coffee' , price:3.00},
  {name:'Cappuccino' , price:4.00}
  
];

var eggs = [
  {name:"Scrambled Eggs" , price:4.00},
  {name:'Sunny-Side-Up Eggs w/ slice of bread' , price:5.00},
  {name:"Boiled Eggs (2)" , price:4.00},

];

var sandwiches = [
  {name: "Ham & Cheese Sandwich" ,price:2.00},
  {name:'Bacon Lettuce Tomato Sandwich' , price:4.00},
  {name:'Bacon Egg & Cheese Sandwich' , price:3.00},
  {name:'Classic Italian Sandwich' , price:3.00},
  {name:'Crispy Chicken Sandwich' , price:4.00}
];

var waffles = [
  {name: "Plain Waffles (2)" ,price:3.00},
  {name:'Chocolate Chip Waffles (2)' , price:4.00},
  {name:'Blueberry Waffles (2)' , price:4.00},
  {name:'Banana Waffles (2)' , price:4.00}

];



//HTML
//Display Coffee Products
function HTMLcoffeeProduct(con){
  let URL = `images/coffee/coffee${con}.jpg`;
  let btn = `btnCoffee${con}`;
  return `
    <!-- Card -->
    <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
              <img class="card-img-top" style="height:16rem;" src="${URL}">
                  <div class="card-body">
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <p class="card-text">${coffee[con-1].name}</p>
                      <p class="card-text">Price: $${coffee[con-1].price}</p>
                      <div class="d-flex justify-content-center-between align-items-center">
                          <div class="btn-group">
                              <button type="button" onclick="cart2('${coffee[con-1].
                              name}', '${coffee[con-1].price}', '${URL}', '${con}', '${btn}')"
                              class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color:inherit;"> Buy </a>
                              </button>
                              <button id="${btn}" type="button" onclick="cart('${coffee[con-1].
                                name}', '${coffee[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm btn-outline-secondary" > Add to Cart
                              </button>
                          </div>
                          <small class="text-muted"> Free Shipping </small>
                    </div>
                </div>
          </div>
    </div>
  `
}

//Display Egg Products
function HTMLeggProduct(con){
  let URL = `images/eggs/eggs${con}.jpg`;
  let btn = `btnEggs${con}`;
  return `
    <!-- Card -->
    <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
              <img class="card-img-top" style="height:16rem;" src="${URL}">
                  <div class="card-body">
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <p class="card-text">${eggs[con-1].name}</p>
                      <p class="card-text">Price: $${eggs[con-1].price}</p>
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                              <button type="button" onclick="cart2('${eggs[con-1].
                              name}', '${eggs[con-1].price}', '${URL}', '${con}', '${btn}')"
                              class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color:inherit;"> Buy </a>
                              </button>
                              <button id="${btn}" type="button" onclick="cart('${eggs[con-1].
                                name}', '${eggs[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm btn-outline-secondary" > Add to Cart
                              </button>
                          </div>
                    </div>
                </div>
          </div>
    </div>
  `
}

//Display Sandwich Products
function HTMLsandwichProduct(con){
  let URL = `images/sandwiches/sandwich${con}.jpg`;
  let btn = `btnSandwich${con}`;
  return `
    <!-- Card -->
    <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
              <img class="card-img-top" style="height:16rem;" src="${URL}">
                  <div class="card-body">
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <p class="card-text">${sandwiches[con-1].name}</p>
                      <p class="card-text">Price: $${sandwiches[con-1].price}</p>
                      <div class="d-flex justify-content-center-between align-items-center">
                          <div class="btn-group">
                              <button type="button" onclick="cart2('${sandwiches[con-1].
                              name}', '${sandwiches[con-1].price}', '${URL}', '${con}', '${btn}')"
                              class="btn btn-sm btn-outline-secondary" > <a href="cart.html" style="color:inherit;"> Buy </a>
                              </button>
                              <button id="${btn}" type="button" onclick="cart('${sandwiches[con-1].
                                name}', '${sandwiches[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm btn-outline-secondary" > Add to Cart
                              </button>
                          </div>
                          <small class="text-muted"> Free Shipping </small>
                    </div>
                </div>
          </div>
    </div>
  `
}

//Display Waffle Products
function HTMLwafflesProduct(con){
  let URL = `images/waffles/waffle${con}.jpg`;
  let btn = `btnWaffle${con}`;
  return `
    <!-- Card -->
    <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
              <img class="card-img-top" style="height:16rem;" src="${URL}">
                  <div class="card-body">
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <i style="color: #f5d742;" class="fa fa-star" ></i>
                      <p class="card-text">${waffles[con-1].name}</p>
                      <p class="card-text">Price: $${waffles[con-1].price}</p>
                      <div class="d-flex justify-content-center-between align-items-center">
                          <div class="btn-group">

                              <button id="${btn}" type="button" onclick="cart2('${waffles[con-1].
                              name}', '${waffles[con-1].price}', '${URL}', '${con}', '${btn}')"
                              class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color:inherit;"> Buy </a>
                              </button>

                              <button id="${btn}" type="button" onclick="cart('${waffles[con-1].
                                name}', '${waffles[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm btn-outline-secondary" > Add to Cart
                              </button>
                          </div>
                    </div>
                </div>
          </div>
    </div>
  `
}

//Cart Animation - Adding Products
function animation(){
  const toast=Swal.fire({
    type:'success',
    title: 'Added to shopping cart',
    toast:true,
    position:'top-end',
    timer:2000,
    showConfirmButton:false
  });
}


//CART FUNCTIONS
function cart(name, price, url, con, btncart){
  var item={
      name: name,
      price: price,
      url: url
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage == null){
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
  } else {
      products = JSON.parse(localStorage.getItem("cart"));
      products.push(item);
      localStorage.setItem("cart", JSON.stringify(products));
  }
  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
  document.getElementById(btncart).style.display="none";
  animation();
}


//RENDER
function render(){
  localStorage.clear();
  for (let index=1; index <= 3; index++) {
    coffeeDiv.innerHTML+=`${HTMLcoffeeProduct(index)}`;
  }

  for (let index=1; index <= 3; index++) {
    eggsDiv.innerHTML+=`${HTMLeggProduct(index)}`;
  }

  for (let index=1; index <= 5; index++) {
    sandwichDiv.innerHTML+=`${HTMLsandwichProduct(index)}`;
  }

  for (let index=1; index <= 4; index++) {
    wafflesDiv.innerHTML+=`${HTMLwafflesProduct(index)}`;
  }

  if (localStorage.getItem("cart") == null){
   
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${cartItems.length}]`;
  }

}

