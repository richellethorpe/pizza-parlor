//Business Logic
//user can select meat for $5 more, sauces and cheeses are free, other toppings are $1 more and size of pizza increases by $5 each size it goes up from small

function Pizza (sizeSelction, toppingList) {
  this.sizeSelction = sizeSelction
  this.basePrice = 0
  this.toppingList = toppingList
  this.toppingListCost = 0
  this.totalCost = 0
}

Pizza.prototype.sumBasePrice = function () {
  if this.size === "small" {
    this.basePrice = 12; 
    } else if (this.size ==="medium") {
      this.basePrice = 16;
    } else if (this.size === "large") {
      this.basePrice = 20;
    }
  };





//UI Logic

function handleForm(event) {
  event.preventDefault();

  const sizeSelection =
  const meatSelection =
  const cheseSelection = 
  const toppingSelection =
  const price = 



  
}


window.addEventListener('load', function() {
  document.querySelector("form#pizza-selections").addEventListener("submit", handleForm);
})