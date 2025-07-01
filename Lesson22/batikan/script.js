// Increment quantity of an element in the cart when "add to cart button" on a product is clicked

// If remove item from cart is clicked, we will hide the item and set quantity to 0

// If we click 'clear cart', then we hide all elements in the cart

// If we add/remove an items to the cart, total price should be updated

const products = [
  {
    name: 'apples',
    addButtonId: 'apples_add',
    quantityId: 'apples_quantity',
    removeButtonId: 'apples_remove',
    cartId: 'apples_cart',
    price: 5,
  },
  {
    name: 'bananas',
    addButtonId: 'bananas_add',
    quantityId: 'bananas_quantity',
    removeButtonId: 'bananas_remove',
    cartId: 'bananas_cart',
    price: 3,
  },
  {
    name: 'bread',
    addButtonId: 'bread_add',
    quantityId: 'bread_quantity',
    removeButtonId: 'bread_remove',
    cartId: 'bread_cart',
    price: 4,
  },
  {
    name: 'eggs',
    addButtonId: 'eggs_add',
    quantityId: 'eggs_quantity',
    removeButtonId: 'eggs_remove',
    cartId: 'eggs_cart',
    price: 4,
  },
];

const totalPriceElement = document.getElementById('totalPriceId');
let total = parseInt(totalPriceElement.textContent);
const clearAll = document.getElementById('cart_preview')


products.map((product) => {
  const addButton = document.getElementById(product.addButtonId);
  const removeButton = document.getElementById(product.removeButtonId);
  const clearAllButton = document.getElementById('clearAllButton');

  if (addButton) {
    addButton.addEventListener('click', () => {
      addToCart(product.cartId, product.quantityId);
      addTotalPrice(product.price);
    })
  }

  if (removeButton) {
    removeButton.addEventListener('click', () => {
      removeFromCart(product.cartId, product.quantityId, product.price);
    })
  }

  if (clearAllButton) {
    clearAllButton.addEventListener('click', () => {
      clearAllCart();
    })
  }
});


function addToCart(cartId, quantityElementId) {
  const productCart = document.getElementById(cartId);
  const quantityElement = document.getElementById(quantityElementId);
  let quantity = parseInt(quantityElement.textContent);

  productCart.classList.remove('hidden');

  quantity++;

  productCart.classList.remove('hidden');
  quantityElement.textContent = quantity;

}

function removeFromCart(cartId, quantityId, price) {
  const productCart = document.getElementById(cartId);
  const quantityElement = document.getElementById(quantityId);
  const currentQuantity = parseInt(quantityElement.textContent);

  if (currentQuantity >= 0) {
    productCart.classList.add('hidden');
    quantityElement.textContent = 0;
    subtractTotalPrice(currentQuantity * price);
  }
}

function addTotalPrice(price) {

  total += price;
  totalPriceElement.textContent = total;
}

function subtractTotalPrice(price) {
  total -= price;
  totalPriceElement.textContent = total;
}



function clearAllCart() {

  const quantities = products.map(product => product.quantityId);
  quantities.forEach(quantityId => {
    const quantitySpanElement = document.getElementById(quantityId);
    if (quantitySpanElement) {
      quantitySpanElement.textContent = 0;

    }
  });

  const cartIds = products.map(product => product.cartId);
  cartIds.forEach(cartId => {
    const cartIdElement = document.getElementById(cartId);
    if (cartId) {
      cartIdElement.classList.add('hidden');
    }
  })
  total = 0;
  totalPriceElement.textContent = 0;

}

