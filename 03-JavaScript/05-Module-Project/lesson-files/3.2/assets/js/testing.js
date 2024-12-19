function shoppingDecision(person) {
    if (person.money >= 100) {
        console.log(`Hello, ${person.name}, You can shop at Ocean.`);
    } else if (person.money < 100 && person.money > 50) {
        console.log(`Hello, ${person.name}, You can shop at EastPoint.`);
    } else if (person.money <= 50 && person.money > 1) {
        console.log(`Hello, ${person.name}, You can shop at WestPoint.`);
    } else {
        console.log(`Hello, ${person.name}, Better not go shopping.`);
    }
}

// Example usage
let person1 = { name: "John", money: 120 };
let person2 = { name: "Alice", money: 175 };
let person3 = { name: "Bob", money: 130 };
let person4 = { name: "Tom", money: 400 };

shoppingDecision(person1); // Output: You can shop at Ocean.
shoppingDecision(person2); // Output: You can shop at EastPoint.
shoppingDecision(person3); // Output: You can shop at WestPoint.
shoppingDecision(person4); // Output: Better not go shopping.