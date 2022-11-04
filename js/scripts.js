//Business Logic

function PizzaToppings (meatTopping, sauceTopping, cheeseTopping, otherToppings, sizeOfPizza) {
  this.meatTopping = meatTopping;
  this.sauceTopping = sauceTopping;
  this.cheeseTopping = cheeseTopping;
  this.otherToppings = otherToppings;
  this.sizeOfPizza = sizeOfPizza;
}

//user can select meat for $5 more, sauces and cheeses are free, other toppings are $1 more and size of pizza increases by $5 each size it goes up from small

PizzaToppings.prototype.addMeatPricing = function() {
 if this.meatTopping === true;{
  return price + 5
 }
}


//UI Logic

function handleForm(event) {
  event.preventDefault();

  
}


window.addEventListener('load', function() {
  document.querySelector("form#pizza-selections").addEventListener("submit", handleForm);
})