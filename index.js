var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: Math.floor((Math.random()*100)+1)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  else {
      var output = "In your cart, you have ";
      for (var i=0; i<cart.length; i++) { 
        
        if(cart.length === 1) {
         output += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
          }
          
        else if(i === cart.length-1) {
           output += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
          }
          
        else {
          output += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
          }
          
        }
      return output;
    }

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
