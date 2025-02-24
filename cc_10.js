// Task 1- Creating  Product class
   //  Product class to represent the inventory items 
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

// Task 2: Creating an order class 
  // Order class to represent customer orders  
  class Order {
    constructor(orderId,product,quantity) {
        this.orderId=orderId; // Unique order ID 
        this.product= product; // instance of product 
        this.quantity= quantity; // quality ordered 
     // Reduce the stock when order is created 
     this.product.updateStock(this.quantity);
    }
    //Methd to get order details 
    getOrderDetails () {
        const totalPrice= this.product.price* this.quantity; 
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity : ${this.quantity},Total Price: $${totalPrice}`;
    }
}
 // Test Case : 
 const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

//  Task 3 - Creating an Inventory Class 
   class Inventory { 
    constructor() { 
        this.products= [];// Array to store products instances
        this.orders=[] // Array to store orders 
    }
    // Method to add a product to the inventory 
    addProduct(product) {
        this.products.push(product);
    }
    // method  to list all products in the inventory 
    listProducts() { 
        this.products.forEach(product=> console.log(product.getDetails()));
    }
   
   // Test Cases : 
   const inventory = new Inventory();
   inventory.addProduct(prod1);
   inventory.listProducts(); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4: Implementing Order Management 
// Method to place an order if stock is available
placeOrder(orderId, product, quantity) { 
    if (product.stock >= quantity) {
        const newOrder = new Order(orderId, product, quantity);
        this.orders.push(newOrder);
        console.log(`Order placed: ${newOrder.getOrderDetails()}`);
    } else {
        console.log(`Insufficient stock for product: ${product.name}`);
    }
}  
 
  // Method to list all placed orders
  listOrders() {
    this.orders.forEach(order => console.log(order.getOrderDetails()));
}
}
// Test Cases :
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// Task 5 : Implementing Product Restocking 
 // method to restock a productid 
 restockProduct(productId, quantity) { // 
    const product = this.products.find(p => p.id === productId); // 
    if (product) {
        product.stock += quantity;
        console.log(`Restocked ${product.name}. New stock: ${product.stock}`); // 
    } else {
        console.log(`Product with ID ${productId} not found.`); //
    }
}
 // Test case : 
 inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"