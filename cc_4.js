// Step 2: Array of products
let products =[
    { sku:"E001", name:"Laptop", cateogry:"electronics", price:1395.00, inventory:75 },
    { sku:"E002", name:"Mouse", cateogry:"electronics", price:23.95, inventory:125 },
    { sku:"E003", name:"Shoes", cateogry:"apparel", price:95.00, inventory:50 },
    { sku:"E004", name:"Detergent", cateogry:"household", price:18.95, inventory:100 },
    { sku:"E005", name:"Coffee", cateogry:"groceries", price:7.95, inventory:150 },

]

//Step 3: Apply Category Discounts 
for (let product of products){
    let discount = 0; 

 switch (product.category){
    case "electronics":
        discount = .20;
        break;
    case "apparel":
        discount = .15;
        break;
    case "groceries":
    case "household":
        discount = .10;
        break;
    default:
        discount = 0;
    break;
 }


 let promoPrice = product.price * (1 - discount);
 product.promoPrice = promoPrice;
}
 
 console.log(products); 

 // Step 4: Customer type discounts
function applyCustomerDiscount(total, customerType) {
  if (customerType === "student") {
    return total * 0.95; // 5% extra off
  } else if (customerType === "senior") {
    return total * 0.93; // 7% extra off
  } else {
    return total; // regular
  }
}