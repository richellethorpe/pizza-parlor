// // //Business Logic
// // //user can select meat for $5 more, sauces and cheeses are free, other toppings are $1 more and size of pizza increases by $5 each size it goes up from small

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.toppingsPrice = {}
  
};

// function PizzaAddOns(meat, cheese, )
Pizza.prototype.sizePrice = function() {
  let sizePrice = 12
  if (this.size ==="small"){
    return sizePrice;
  }else if(this.size === "medium") {
    return sizePrice + 4; 
  }else if(this.size === "large") {
    return sizePrice +8;
  }

};

// const pizza1 = new Pizza("medium", "peperoni", "mozzarella", "olives");

//UI Logic

function handleSubmit(event) {
  event.preventDefault();

  const sizeSelectionValue = document.getElementById("size-options").value;
  const meatSelectionValue = document.querySelector("input[name=meat-options]:checked").value;
  const cheseSelectionValue = document.querySelector("input[name=cheese-options]:checked").value;
  const toppingSelectionValue =document.querySelector("input[name=topping-options]:checked").value;
  //const price = "";
  const toppingSelectionPrice =document.querySelector("input[name=topping-options]:checked").price;

  document.getElementById("sizeSelectionDisplay").innerText = sizeSelectionValue;
  document.getElementById("meatSelectionDisplay").innerText = meatSelectionValue;
  document.getElementById("cheeseSelectionDisplay").innerText = cheseSelectionValue;
  document.getElementById("toppingSelectionDisplay").innerText = toppingSelectionValue;
  console.log(toppingSelectionPrice);


  document.getElementById('orderSummary').removeAttribute('class');
  }


window.addEventListener('load', function() {
  const form = document.querySelector("form");
  form.addEventListener('submit', handleSubmit);
})