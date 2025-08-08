/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
In this project, you'll create a simple Shopping Cart to
simulate adding items, removing items, calculating totals,
and applying discounts.

You'll practice:
1. Classes and objects
2. Encapsulation and abstraction
3. Methods (functions inside a class)
4. Arrays and basic array methods (push, filter, find)
5. Conditional statements (if-else)

Below is a step-by-step guide with comments explaining
each part. You can test each step by running the code in
Node.js or a browser console.
*/

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `_items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/

/*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
1. Create an `addItem` method in the `ShoppingCart` class.
2. The method should:
   - Accept `name`, `price`, and `quantity` as parameters.
   - Check if the item already exists in the cart.
     - If it exists, increase the quantity.
     - Otherwise, add the new item to the `_items` array.
*/

/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `_items` array if it exists.
*/

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/

/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an `applyDiscount` method to the `ShoppingCart` class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the 
     code is valid.
3. Use an object to store discount codes and their values.
*/

class ShoppingCart {
  constructor() {
    this._items = [];
  }

  viewCart() {
    console.log('\n--- Viewing Cart ---')
    if (this._items.length < 1) {
      console.log('There are no items in cart');
      return;
    } else {
      //console.log('Viewing items in the cart:');
      for (const item of this._items) {
        console.log(
          `Item: \'${item.name}\', price: \'${item.price.amount} ${item.price.currency}\', quantity: \'${item.quantity}\'`,
        );
      }
    }
  }
  addItem(name, price, quantity) {

    console.log("\n--- Adding Item ---")
   // console.log(`Adding item ${name} to the cart...`);
   const nameToUpper =  name.toUpperCase(); 

   //console.log(`${name} adding to the cart...`);

    for (const item of this._items) {
      if (item.name === nameToUpper) {
        console.log(`Item ${name} already exists, updating quantity only`);
        item.quantity = item.quantity + quantity;
        return;
      }
    }

    //console.log(`Item ${name} does not exist yet, adding to the cart.`);
    console.log(`Item ${name} added to the cart.`);
    this._items.push({ price, name: nameToUpper, quantity }); //   = this._items.push({name: name, price: price,quantity: quantity})
  }



  //Step3
removeItem(name) {
  console.log("\n--- Removing Item ---")

  const nameToUpper = name.toUpperCase();

  if (this._items.length === 0) {
    console.log("Shopping cart is empty.");
    return;
  }

  for (let i = 0; i < this._items.length; i++) {
    if (this._items[i].name === nameToUpper) {

      if (this._items[i].quantity > 1) {
        this._items[i].quantity -= 1;
        console.log(`Decreased quantity of ${name} by 1.`);
      } else {
        this._items.splice(i, 1);   //array.splice(startIndex, noOfDelete)How many items to delete starting from that index
        console.log(`${name} removed from the cart.`);
      }
      return;
    }
  }

  console.log(`${name} not found in the cart.`);
}



//step4
getTotal() {

  console.log("\n--- Getting Total ---")
  let total = 0;
  for (const item of this._items) {
    total += item.price.amount * item.quantity;
  }
  console.log(`Total cost is: $${total}`);
  return total;
}

//step5

applyDiscount(code) {
  console.log("\n--- Applying Discount ---")
  
  code=code.toUpperCase();
 
  const discounts = {
  SAVE10: 0.10,
  SAVE20: 0.20,
  SAVE30: 0.30
};



  const discount = discounts[code];
  if (!discount) {
    console.log("Invalid discount code.");
    return;
  }

  const total = this.getTotal();
  const newTotal = total - (total * discount);
  console.log(`Discount applied with ${code}. New total: $${newTotal}`);
}

}

const runningShoes = {
  name: 'Running shoes',
  price: {
    amount: 10,
    currency: 'USD',
  },
};

const cart1 = new ShoppingCart();
console.log(cart1);
cart1.viewCart();

cart1.addItem(runningShoes.name, runningShoes.price, 1);

cart1.viewCart();
cart1.addItem('shoes', {amount: 10, currency: 'USD'}, 2);
cart1.addItem('bag', {amount: 15, currency: 'USD'}, 4);
cart1.viewCart();



cart1.removeItem('shoes');
cart1.viewCart();
cart1.removeItem('watch');
cart1.viewCart();
cart1.removeItem('bag');
cart1.viewCart();

cart1.getTotal(); 

cart1.applyDiscount("SAVE10");  
cart1.applyDiscount("save20"); 
cart1.applyDiscount("Save100");

cart1.viewCart();




//  For step 5
// const discounts = {
//   save10: 'Save10',
//   save20: 'Save20',
//   save30: 'Save30',
// };
