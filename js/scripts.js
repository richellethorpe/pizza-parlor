// //Business Logic
// //user can select meat for $5 more, sauces and cheeses are free, other toppings are $1 more and size of pizza increases by $5 each size it goes up from small

// function Pizza (sizeSelction, toppingList) {
//   this.sizeSelction = sizeSelction
//   this.basePrice = 0
//   this.toppingList = toppingList
//   this.toppingListCost = 0
//   this.totalCost = 0
// }

// Pizza.prototype.sumBasePrice = function () {
//   if this.size === "small" {
//     this.basePrice = 12; 
//     } else if (this.size ==="medium") {
//       this.basePrice = 16;
//     } else if (this.size === "large") {
//       this.basePrice = 20;
//     }
//   };

//   Pizza.prototype




//UI Logic

function handleSubmit(event) {
  event.preventDefault();

  const sizeSelection = document.getElementById("size-options").value;
  const meatSelection = document.querySelector("input[name=meat-options]:checked").value;
  const cheseSelection = document.querySelector("input[name=cheese-options]:checked").value;
  const toppingSelection =document.querySelector("input[name=topping-options]:checked").value;
  //const price = "";

  document.getElementById("sizeSelectionDisplay").innerText = sizeSelection;
  document.getElementById("meatSelectionDisplay").innerText = meatSelection;
  document.getElementById("cheeseSelectionDisplay").innerText = cheseSelection;
  document.getElementById("toppingSelectionDisplay").innerText = toppingSelection;


  document.getElementById('orderSummary').removeAttribute('class');
  }


window.addEventListener('load', function() {
  const form = document.querySelector("form");
  form.addEventListener('submit', handleSubmit);
})