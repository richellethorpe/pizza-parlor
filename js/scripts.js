// Business Logic

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  }

  Pizza.prototype.price = function (){
    let totalCost = 0
    if (this.size === "small") {
       totalCost+= 12;
    }else if (this.size === "medium") {
      totalCost+= 16;
    }else if (this.size === "large"){
      totalCost+= 20;
    }

    this.toppings.forEach(function(topping){
      if (topping.includes('spinach') ||topping.includes('olives')  ||topping.includes('anchovies') || topping.includes('mushrooms') || topping.includes('tomatos')) {
        totalCost += 0.50; }
        if (topping.includes('sausage') ||topping.includes('ham') || topping.includes('pepperoni')) {
          totalCost += 2; }
    });
    return totalCost.toFixed(2);
    }


  // UI Logic
  
  function handlePizzaOrder(e) {
    e.preventDefault();
    const paragraph = document.createElement("p");
    const h2 = document.createElement("h2");
    const pizzaSize = document.getElementById("pizza-size").value;
    let toppingInput = document.querySelectorAll("input[name=toppings]:checked"); 
    let toppingArray = Array.from(toppingInput);
    const toppings = [];
  
    toppingArray.forEach(function(element) {
      toppings.push(element.value);
    });
  
    let pizzaOrder = new Pizza(toppings, pizzaSize);
    let costOf = pizzaOrder.price()
    document.querySelector("div#result").removeAttribute("class");
    document.querySelector("h4#resultDisplay").innerText = ("Your total comes to $" + costOf);
    
  }
  
  
  window.addEventListener("load", function () {
    document.querySelector("form#orderUp").addEventListener("submit", handlePizzaOrder);
  });