// Task 1- Creating  Product class
   // Creating the product class to represent the inventory items 
class Product { 
    constructor(name,id,price,stock) { 
    this.name=name; // Product Name 
    this.id=id;//Product ID 
    this.price=price; // Product price 
    this.stock=stock; // Available stock 
}
  // Method to get product detials in formatted string 
  getDetails () {
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
  }
   //Method to update the stock  after an order 
   updateStock(quantity) { 
        this.stock-= quantity; // Reducing stock by ordered amount 
   }
}
// Test Case : 
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"