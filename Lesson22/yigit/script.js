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
    price: 1
  },
  {
    name: 'bananas',
    addButtonId: 'bananas_add',
    quantityId: 'bananas_quantity',
    removeButtonId: 'bananas_remove',
    cartId: 'bananas_cart',
     price: 2
  },
  {
    name: 'bread',
    addButtonId: 'bread_add',
    quantityId: 'bread_quantity',
    removeButtonId: 'bread_remove',
    cartId: 'bread_cart',
     price: 3
  },
  {
    name: 'eggs',
    addButtonId: 'eggs_add',
    quantityId: 'eggs_quantity',
    removeButtonId: 'eggs_remove',
    cartId: 'eggs_cart',
     price: 4
  },
];

products.map((product) => {
  document
    .getElementById(product.addButtonId)
    .addEventListener('click', () => addToCart(product.cartId, product.quantityId));

  document
    .getElementById(product.removeButtonId)
    .addEventListener('click', () =>
      removeFromCart(product.cartId, product.quantityId),
    );
});

function addToCart(cartId, quantityElementId) {
  const productCart = document.getElementById(cartId);
  const quantityElement = document.getElementById(quantityElementId);
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  productCart.classList.remove('hidden');
  quantityElement.textContent = quantity;
    updateTotalPrice();
}




function updateTotalPrice() {
  let total = 0;
  products.forEach(product => {
    const quantity = parseInt(document.getElementById(product.quantityId).textContent);
    total += quantity * product.price;
  });
  document.getElementById('total_price').textContent = `Total Price: $${total}`;
}





function removeFromCart(cartId, quantityId) {
  const productCart = document.getElementById(cartId);
  productCart.classList.add('hidden');
  const quantityElement = document.getElementById(quantityId);
  quantityElement.textContent = 0;
  updateTotalPrice();
}

document.getElementById('clear_cart').addEventListener('click', () => {
  products.forEach(product => {
    document.getElementById(product.cartId).classList.add('hidden');
    document.getElementById(product.quantityId).textContent = 0;
  });
  updateTotalPrice();
});

document.querySelectorAll('.quantity-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const productName = btn.getAttribute('data-product');
    const action = btn.getAttribute('data-action');
    const product = products.find(p => p.name === productName);
    const quantityElement = document.getElementById(product.quantityId);
    let quantity = parseInt(quantityElement.textContent);

    if (action === 'increase') {
      quantity++;
    } else if (action === 'decrease' && quantity > 0) {
      quantity--;
    }

    quantityElement.textContent = quantity;

   
    if (quantity === 0) {
      document.getElementById(product.cartId).classList.add('hidden');
    } else {
      document.getElementById(product.cartId).classList.remove('hidden');
    }

    updateTotalPrice();
    
  });
});