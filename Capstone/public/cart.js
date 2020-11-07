
// Your web app's Firebase configuration
var firebaseConfig = {
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

//GLOBAL
products = JSON.parse(localStorage.getItem('cart'));
var cartItems=[];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById('table');
var total=0;

//HTML OUTPUT
function tableHTML(i){
    return `
        <tr>
        <th scope="row">${i+1}</th>
        <td><img style="width:90px;" src="${products[i].url}" ></td>
        <td>${products[i].name}</td>
        <td>1</td>
        <td>$${products[i].price}</td>
        </tr>
    `;
}

//BUY FUNCTION
function purchase(){
    var d = new Date();
    var t = d.getTime();
    var counter=t;
    counter +=1;
    let db = firebase.database().ref('order/'+counter);
    let itemdb={
        id: counter,
        order: counter-565,
        total: total
    }
    db.set(itemdb);
    animation();
    clean();
}

//Purchase Animation
function animation(){
    const toast = Swal.fire({
      type:'success',
      title: 'Purchase Confirmed. \n Thank you for shopping at The Cafe!',
      toast:true,
      position:'center',
      timer:50000,
      showConfirmButton:false
    });
  }

//Clear Shopping Cart
function clean() {
    localStorage.clear();
    for(let index=0; index < products.length; index++){
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    total=0;
    table.innerHTML=`
        <tr>
        <th ></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
    `;
    cart_n.innerHTML='';
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none";
}

//Render Display
function render(){
    for(let index=0; index < products.length; index++){
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    table.innerHTML+=`
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">Total: $${total}</th>
    </tr>

    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">
        <button id="btnClear" onclick="clean()" class="btn text-white
        btn-success">Clear Cart</button>
    </th>
    <th scope="col">
        <button id="btnBuy" onClick="purchase()" class="btn text-white
        btn-primary">Confirm Purchase</button>
    </th>
    <th scope="col"></th>
    </tr>
    `;

    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;

}