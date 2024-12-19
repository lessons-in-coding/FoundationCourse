// Item catalog (available products)
var items = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Headphones", price: 100 },
  { name: "Smartwatch", price: 200 }
];

// Function to display available items
var displayItems = function() {
  console.log("Available items:");
  for (var i = 0; i < items.length; i++) {
    console.log(i + 1 + ". " + items[i].name + " - $" + items[i].price);
  }
};

// Shopping cart and user money
var cart = [];
var userBalance = 1500;

// Function to add an item to the cart
var addToCart = function(itemIndex) {
  var item = items[itemIndex - 1]; // Convert input to 0-based index
  if (userBalance >= item.price) {
    cart.push(item);
    userBalance -= item.price; // Deduct price from balance
    console.log(item.name + " has been added to your cart.");
  } else {
    console.log("You do not have enough money to buy " + item.name + ".");
  }
};

// Function to view cart and total price
var viewCart = function() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
    return;
  }

  console.log("Your cart contains:");
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    console.log(cart[i].name + " - $" + cart[i].price);
    total += cart[i].price;
  }
  console.log("Total: $" + total);
};

// Function to checkout
var checkout = function() {
  if (cart.length === 0) {
    console.log("Your cart is empty. Add some items before checking out!");
    return;
  }

  console.log("Thank you for your purchase!");
  console.log("You bought:");
  for (var i = 0; i < cart.length; i++) {
    console.log("- " + cart[i].name);
  }
  console.log("Remaining balance: $" + userBalance);
  cart = []; // Clear the cart after checkout
};

// Main shopping flow
var shopping = function() {
  console.log("Welcome to the Online Store!");
  var keepShopping = true;

  while (keepShopping) {
    // Show options
    var action = window.prompt(
      "What would you like to do?\n1. Browse Items\n2. Add to Cart\n3. View Cart\n4. Checkout\n5. Exit\nEnter the number of your choice:"
    );

    switch (action) {
      case "1":
        displayItems();
        break;
      case "2":
        var itemIndex = parseInt(
          window.prompt("Enter the number of the item you'd like to add:")
        );
        if (itemIndex >= 1 && itemIndex <= items.length) {
          addToCart(itemIndex);
        } else {
          console.log("Invalid item number.");
        }
        break;
      case "3":
        viewCart();
        break;
      case "4":
        checkout();
        break;
      case "5":
        keepShopping = false;
        console.log("Thank you for visiting our store!");
        break;
      default:
        console.log("Invalid choice. Please enter a valid option.");
    }
  }
};

// Start the shopping simulation
shopping();