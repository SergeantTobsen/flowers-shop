products.forEach(function (val) {
  document.querySelector(
    ".products"
  ).innerHTML += ` <div class="card product col my-4" style="width: 300px;">
  <img class="card-img-top mt-2 px-3" src="${val.image}" alt="product img ${val.name}">
  <div class="card-body px-3 py-0 position-relative">
      <h5 class="card-title pt-3">${val.name}</h5>
      <p class="card-text pb-5 mb-5">${val.info}</p>
      <div class="container1 d-flex">
        <p class="card-text h3 text-end me-4">€ ${val.price}</p>
        <p class="card-text3 d-flex justify-content-end"><button class="btn product-button"><i
                  class="fs-4 bi bi-cart-plus"></i> Add to cart</button></p>
       </div> 
  </div>`;
});

let addCartBtns = document.querySelectorAll(".product-button");

let cart = [];

function minusQtty(i) {
  if (cart[i].qtty == 1) {
    cart.splice(i, 1);
  } else {
    cart[i].qtty--;
    document.querySelectorAll(".qtty")[i].innerHTML = cart[i].qtty;
  }
}

function plusQtty(i) {
  cart[i].qtty++;
  document.querySelectorAll(".qtty")[i].innerText = cart[i].qtty;
}

function delItem(i) {
  cart[i].qtty = 1;
  cart.splice(i, 1);
}

function addToCart(i) {
  if (cart.find((item) => item.name == products[i].name)) {
    products[i].qtty++;
  } else {
    cart.push(products[i]);
  }
  cartCreation();
  totalPrice();
  totalAmount();
}
function totalPrice() {
  let total = 0;

  cart.forEach(function (product) {
    total = total + product.price * product.qtty;
  });

  if (total > 500) {
    document.getElementById("price").innerHTML =
      (total - total * 0.1).toFixed(2) + " € (10% discount)";
  } else document.getElementById("price").innerHTML = total.toFixed(2) + " €";
}

function totalAmount() {
  let total = 0;

  cart.forEach(function (product) {
    total = total + product.qtty;
  });
  document.getElementById("amount").innerHTML = total;
}

function cartCreation() {
  document.querySelector(".cart-items").innerHTML = "";

  cart.forEach(function (val) {
    document.querySelector(
      ".cart-items"
    ).innerHTML += `<div class="cart-row row gx-0">
    <div class="cart-item col-6 ps-md-5 my-2 d-flex align-items-center justify-content-start">
        <img class="cart-item-image" src="${val.image}" width="100" height="100" alt="js-logo">
        <div class="cart-item-title h5 ms-2">${val.name}</div>
    </div>
    <div class="cart-qtty-action col-2 d-flex justify-content-center align-items-center">
        <div class="d-flex">
            <button class="plus fs-5 bi bi-plus-circle-fill border border-0"></button>
        </div>
        <div class="qtty text-center m-0 cart-quantity h4 w-25">${val.qtty}</div>
        <div class="d-flex">
            <button class="minus fs-5 bi bi-dash-circle-fill border border-0"></button>
        </div>
    </div>
    <div class="col-1 d-flex justify-content-start align-items-center">
        <button class="del fs-4 bi bi-trash3-fill text-danger border border-0"></button>
    </div>
    <div class="cart-price col-3 h5 my-auto text-end p-2 pe-sm-5">€&nbsp;${val.price}</div>
</div>`;
  });

  let plusBtns = document.querySelectorAll(".plus");

  plusBtns.forEach((plusBtn, i) => {
    plusBtn.addEventListener("click", function () {
      plusQtty(i);
      totalPrice();
      totalAmount();
    });
  });

  let minusBtns = document.querySelectorAll(".minus");

  minusBtns.forEach((minusBtn, i) => {
    minusBtn.addEventListener("click", function () {
      minusQtty(i);
      totalPrice();
      cartCreation();
      totalAmount();
    });
  });

  let delBtns = document.querySelectorAll(".del");

  delBtns.forEach((delBtn, i) => {
    delBtn.addEventListener("click", function () {
      delItem(i);
      totalPrice();
      cartCreation();
      totalAmount();
    });
  });
}

addCartBtns.forEach(function (addBtn, i) {
  addBtn.addEventListener("click", function () {
    addToCart(i);
  });
});
