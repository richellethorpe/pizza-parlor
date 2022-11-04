// //Business Logic
// //user can select meat for $5 more, sauces and cheeses are free, other toppings are $1 more and size of pizza increases by $5 each size it goes up from small

function Pizza(sizeSelection, meatSelection, cheeseSelction, toppingSelection) {
  this.sizeSelection = sizeSelection
  this.meatSelection = meatSelection
  this.cheeseSelection = cheeseSelction
  this.toppingSeletion = toppingSelection
  this.basePrice= 0
  
}

Pizza.prototype.findBasePrice = function () {

  if (this.sizeSelection === "small") {
    this.basePrice =12;
    } else if (this.sizeSelction ==="medium") {
    this.basePrice =16;
    } else if (this.sizeSelction === "large") {
    this.basePrice = 20;
    }
    console.log(this.basePrice);
  };

let newZa = new Pizza("large", "pepperoni", "cheddar", "olives");

function getPrice(pizza){

}


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
})