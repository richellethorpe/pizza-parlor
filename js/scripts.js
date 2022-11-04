// //Business Logic
// //user can select meat for $5 more, sauces and cheeses are free, other toppings are $1 more and size of pizza increases by $5 each size it goes up from small

function Pizza((size, meat, cheese, topping) {
  this.size = size;
  this.meat = meat;
  this.cheese = cheese;
  this.topping = topping;
  
})

Pizza.prototype.price = function(size) {
  let price = 12
  if (size === "medium") {
    price +=4;
  }
};

const pizza1 = new Pizza("medium", "peperoni", "mozzarella", "olives");

//UI Logic

function handleSubmit(event) {
  event.preventDefault();

  const sizeSelectionValue = document.getElementById("size-options").value;
  const meatSelectionValue = document.querySelector("input[name=meat-options]:checked").value;
  const cheseSelectionValue = document.querySelector("input[name=cheese-options]:checked").value;
  const toppingSelectionValue =document.querySelector("input[name=topping-options]:checked").value;
  //const price = "";

  document.getElementById("sizeSelectionDisplay").innerText = sizeSelectionValue;
  document.getElementById("meatSelectionDisplay").innerText = meatSelectionValue;
  document.getElementById("cheeseSelectionDisplay").innerText = cheseSelectionValue;
  document.getElementById("toppingSelectionDisplay").innerText = toppingSelectionValue;


  document.getElementById('orderSummary').removeAttribute('class');
  }


window.addEventListener('load', function() {
  const form = document.querySelector("form");
  form.addEventListener('submit', handleSubmit);
});