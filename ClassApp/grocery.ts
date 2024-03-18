// Define a class for grocery items
class Grocery {
    name: string;
    quantity: number;
    price: number;
    category: string;

    constructor(name: string, quantity: number, price: number, category: string) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
}

// Array of grocery items
let groceries: Grocery[] = [
    new Grocery("Milk", 3, 2.5, "Dairy"),
    new Grocery("Bread", 6, 1.75, "Bakery"),
    new Grocery("Eggs", 11, 1.99, "Dairy"),
];

// Display groceries as HTML output
console.log("<h1>Grocery List</h1>");
console.log("<ul>");
groceries.forEach(item => {
    console.log(`<li>${item.name} - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)} - Category: ${item.category}</li>`);
});
console.log("</ul>");