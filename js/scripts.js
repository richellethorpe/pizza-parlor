// Business Logic

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  let totalCost = 0
  }

  Pizza.prototype.price = function (){
    let totalCost=0
    if (this.size === "small") {
       totalCost+= 12;
    }else if (this.size === "medium") {
      totalCost+= 16;
    }else if (this.size === "large"){
      totalCost+= 20;
    }
  
  console.log(totalCost)
  }
  

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