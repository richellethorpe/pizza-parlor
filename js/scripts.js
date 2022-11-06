// Business Logic

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  }
  
  Pizza.prototype.price = function(pizza) {
  let sizePrice = 12
  if (this.size ==="small"){
    return sizePrice;
  }else if(this.size === "medium") {
    return sizePrice + 4; 
  }else if(this.size === "large") {
    return sizePrice +8;
  }
  
    let toppingsPrice = 0;
    if (pizza.toppings.includes('spinach') || pizza.toppings.includes('olives') || pizza.toppings.includes('mushrooms') || pizza.toppings.includes('tomatos')) {
      toppingsPrice += 0.50; }
    if (pizza.toppings.includes('pepperoni') || pizza.toppings.includes('sausage') || pizza.toppings.includes('ham')) {
      toppingsPrice += 1.00; }
    if (pizza.toppings.includes('truffle-oil')) {
      toppingsPrice += 2.00; }
    let totalCost = sizePrice + toppingsPrice;
    return totalCost;
    
  };
  
  // UI Logic

  function handlePizzaOrder(event) {
    event.preventDefault();
    
  
    const paragraph = document.createElement("p");
    const h2 = document.createElement("h2");
    const pizzaSize = document.getElementById("pizza-size").value;
    let toppingInput = document.querySelectorAll("input[name=toppings]:checked");
    console.log(toppingInput);
    let toppingArray = Array.from(toppingInput);
    let toppings = [];
    
    toppingArray.forEach(function(element) {
      toppings.push(element.value);
    });
    console.log("these are the", toppings);
    let pizzaOrder = new Pizza(toppings, pizzaSize);
    console.log(pizzaOrder)
    let costOf = pizzaOrder.price(pizzaOrder)
    console.log(costOf);
    document.querySelector("div#result").removeAttribute("class");
    h2.append("Your pizza has been submitted.");
    paragraph.append("Your total is $" + costOf +". Made with love and turtle power");
    document.body.append(h2, paragraph);
  }
  
  function hideResults(event) {
    event.preventDefault()
    const h2Hide = document.querySelector("h2");
    const pHide = document.querySelector("p")
    h2Hide.remove();
    pHide.remove();
  }
  
  window.addEventListener("load", function () {
    document.querySelector("form#orderUp").addEventListener("submit", handlePizzaOrder);
    hideResults();
  });