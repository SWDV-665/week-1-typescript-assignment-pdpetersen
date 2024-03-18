// Define a class for grocery items
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, category) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
    return Grocery;
}());
// Array of grocery items
var groceries = [
    new Grocery("Milk", 3, 2.5, "Dairy"),
    new Grocery("Bread", 6, 1.75, "Bakery"),
    new Grocery("Eggs", 11, 1.99, "Dairy"),
];
// Display groceries as HTML output
document.addEventListener('DOMContentLoaded', function () {
    var groceryList = document.querySelector('ul');
    groceries.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = "".concat(item.name, " - Quantity: ").concat(item.quantity, " - Price: $").concat(item.price.toFixed(2), " - Category: ").concat(item.category);
        groceryList.appendChild(listItem);
    });
});
