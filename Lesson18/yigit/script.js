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
    if (this._items.length < 1) {
      console.log('There are no items in cart');
      return;
    } else {
      console.log('Viewing items in the cart:');
      for (const item of this._items) {
        console.log(
          `Item: \'${item.name}\', price: \'${item.price.amount} ${item.price.currency}\', quantity: \'${item.quantity}\'`,
        );
      }
    }
  }
  addItem(name, price, quantity) {
    console.log(`Adding item ${name} to the cart...`);
    for (const item of this._items) {
      if (item.name === name) {
        console.log(`Item ${name} already exists, updating quantity only`);
        item.quantity = item.quantity + quantity;
        return;
      }
    }

    console.log(`Item ${name} does not exist yet, adding to the cart.`);
    this._items.push({ price, name, quantity }); //   = this._items.push({name: name, price: price,quantity: quantity})
  }

removeItem(name) {
  const index = this._items.findIndex(item => item.name === name);
  if (index !== -1) {
    this._items.splice(index, 1);
    console.log(`Item '${name}' removed from the cart.`);
  } else {
    console.log(`Item '${name}' not found in the cart.`);
  }
 }
 

getTotal() {
  let total = 0;
  for (const item of this._items) {
    total += item.price.amount * item.quantity;
  }
  console.log(` The total cost is...${total}`)
}

applyDiscount(code){
    
  const discountCodes = {
    SAVE10: 0.10,
    SAVE20: 0.20,
    SAVE30: 0.30,
  };

  const fixedCode = code.toUpperCase();

  if (discountCodes[fixedCode]) {
    let total = 0;
   for (const item of this._items) {
  total += item.price.amount * item.quantity;
  }
  const discount = discountCodes[fixedCode];
  const discountedTotal = total * (1 - discount);
  console.log(`${fixedCode} was applied. the total is ${discountedTotal} now.`)
  } else {
    console.log("the code is invalid.")
  }
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
cart1.addItem('shoes', { amount: 10, currency: 'USD' }, 2);
cart1.addItem('bag', { amount: 15, currency: 'USD' }, 4);
cart1.viewCart();


