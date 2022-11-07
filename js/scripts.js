// Business Logic

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  }
  
  Pizza.prototype.getCost = function() {
  let sizePrice = 12
  if (this.size ==="small"){
    return sizePrice;
  }else if(this.size === "medium") {
    return sizePrice + 4; 
  }else if(this.size === "large") {
    return sizePrice +8;
  }
  
    let toppingsCost = 0;
    if (pizza.toppings.includes('spinach') || pizza.toppings.includes('olives') || pizza.toppings.includes('mushrooms') || pizza.toppings.includes('tomatos')) {
      toppingsCost += 0.50; }
    if (pizza.toppings.includes('pepperoni') || pizza.toppings.includes('sausage') || pizza.toppings.includes('ham')) {
      toppingsCost += 1.00; }
    if (pizza.toppings.includes('truffle-oil')) {
      toppingsCost += 2.00; }
  
    let totalCost = sizePrice + toppingsCost;
    console.log(totalCost);
  };
  
  // UI Logic
  
  function handlePizzaOrder(e) {
    e.preventDefault();
  
    const paragraph = document.createElement("p");
    const h2 = document.createElement("h2");
    const pizzaSize = document.getElementById("pizza-size").value;
    let toppingInput = document.querySelectorAll("input[name=toppings]:checked"); // NodeList
    let toppingArray = Array.from(toppingInput);
    const toppings = [];
  
    toppingArray.forEach(function(element) {
      toppings.push(element.value);
    });
  
    let pizzaOrder = new Pizza(toppings, pizzaSize);
    console.log(pizzaOrder)
    let costOf = pizzaOrder.getCost(pizzaOrder)
    console.log(costOf);
    h2.append("Your pizza has been submitted.");
    paragraph.append("Your total is $" + costOf +". Made with love and turtle power!");
    document.body.append(h2, paragraph);
  }
  
  
  window.addEventListener("load", function () {
    document.querySelector("form#orderUp").addEventListener("submit", handlePizzaOrder);
  });