// Increment quantity of an element in the cart when "add to cart button" on a product is clicked

// If remove item from cart is clicked, we will hide the item and set quantity to 0

// If we click 'clear cart', then we hide all elements in the cart

// If we add/remove an items to the cart, total price should be updated



//  const products= [
//   {name: 'apples', },
//   {name: 'bananas',},
//   {name: 'breads',},
//   {name: 'eggs',}
// ];

const products = [
  {
    name: 'apples',
    addButtonId: 'apples_add',
    quantityId: 'apples_quantity',
    removeButtonId: 'apples_remove',
    cartId: 'apples_cart',
    price:2,
  },
  {
    name: 'bananas',
    addButtonId: 'bananas_add',
    quantityId: 'bananas_quantity',
    removeButtonId: 'bananas_remove',
    cartId: 'bananas_cart',
    price:3,
  },
  {
    name: 'bread',
    addButtonId: 'bread_add',
    quantityId: 'bread_quantity',
    removeButtonId: 'bread_remove',
    cartId: 'bread_cart',
    price:2,
  },
  {
    name: 'eggs',
    addButtonId: 'eggs_add',
    quantityId: 'eggs_quantity',
    removeButtonId: 'eggs_remove',
    cartId: 'eggs_cart',
    price:5,
  },
];

// products.map(product)=> {
//   document.getElementById(product.name + '_add').addEventListener('click', () => 
//       addToCart(product.name + '_quantity'));
// });

   calculateTotalPrice();

products.map((product) => {// Loop through each product in the products array.
  document
    .getElementById(product.addButtonId)
    .addEventListener('click', () => 
      addToCart(product.cartId, product.quantityId));

  document
    .getElementById(product.removeButtonId)
    .addEventListener('click', () =>
      removeFromCart(product.cartId, product.quantityId),
    );

document.getElementById('clear_cart')
.addEventListener('click', clearCart);

     document.getElementById(`${product.name}_increase`)
     .addEventListener('click', () => {
    addToCart(product.cartId, product.quantityId);
  });


   document.getElementById(`${product.name}_decrease`)
   .addEventListener('click', () => {
    decreaseQuantity(product.cartId, product.quantityId);
  });


});


function addToCart(cartId, quantityElementId) {
  const productCart = document.getElementById(cartId);
  const quantityElement = document.getElementById(quantityElementId);
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  productCart.classList.remove('hidden');
  quantityElement.textContent = quantity;

    calculateTotalPrice();
}
function decreaseQuantity(cartId, quantityElementId) {
  const quantityElement = document.getElementById(quantityElementId);
  let quantity = parseInt(quantityElement.textContent);

  quantity--;

  if (quantity <= 0) {
    removeFromCart(cartId, quantityElementId);
  } else {
    quantityElement.textContent = quantity;
    calculateTotalPrice();
  }
}

function calculateTotalPrice() {
  let total = 0;

  products.forEach((product) => {
    const quantity = parseInt(document.getElementById(product.quantityId).textContent);
    total += quantity * product.price;
  });

  document.getElementById('total_price').textContent = `Total Price: $${total}`;
}


function removeFromCart(cartId, quantityElementId) {
  document.getElementById(cartId).classList.add('hidden');
  document.getElementById(quantityElementId).textContent = 0;
  calculateTotalPrice();
}

function clearCart() {
  products.forEach(p => {
    document.getElementById(p.quantityId).textContent = 0;
    document.getElementById(p.cartId).classList.add('hidden');
  });
  calculateTotalPrice();
}