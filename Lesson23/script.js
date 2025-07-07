// Increment quantity of an element in the cart when "add to cart button" on a product is clicked

// If remove item from cart is clicked, we will hide the item and set quantity to 0

// If we click 'clear cart', then we hide all elements in the cart

// If we add/remove an items to the cart, total price should be updated

/* const products = [
  {
    name: 'apples',
    addButtonId: 'apples_add',
    quantityId: 'apples_quantity',
    removeButtonId: 'apples_remove',
    cartId: 'apples_cart',
    price: 5,
    decrease: 'apples_decrease',
    increase: 'apples_increase',
  },
  {
    name: 'bananas',
    addButtonId: 'bananas_add',
    quantityId: 'bananas_quantity',
    removeButtonId: 'bananas_remove',
    cartId: 'bananas_cart',
    price: 3,
    decrease: 'bananas_decrease',
    increase: 'bananas_increase',
  },
  {
    name: 'bread',
    addButtonId: 'bread_add',
    quantityId: 'bread_quantity',
    removeButtonId: 'bread_remove',
    cartId: 'bread_cart',
    price: 4,
    decrease: 'bread_decrease',
    increase: 'bread_increase',
  },
  {
    name: 'eggs',
    addButtonId: 'eggs_add',
    quantityId: 'eggs_quantity',
    removeButtonId: 'eggs_remove',
    cartId: 'eggs_cart',
    price: 4,
    decrease: 'eggs_decrease',
    increase: 'eggs_increase',
  },
];
*/

const apiRequest = fetch('https://dummyjson.com/products?limit=10')
  .then((res) => res.json())
  .then((data) => {
    console.log('data.products', data.products);
    const allProducts = [...data.products];
    for (let i = 0; i < allProducts.length; i++) {
      createProductCart(allProducts[i]);
    }
  })
  .catch((error) => console.error(error));

console.log('apiRequest', apiRequest);

 /* function createProductCart(product) {
  const row = document.createElement('div');
  row.classList.add(
    'p-4',
    'flex',
    'items-stretch',
    'justify-between',
    'gap-4',
    'rounded-xl',
  );

  const div2 = document.createElement('div');
  div2.classList.add('flex', 'flex-[2_2_0px]', 'flex-col', 'gap-4');

  const div3 = document.createElement('div');
  div3.classList.add('flex', 'flex-col', 'gap-1');

  const h2 = document.createElement('h2');
  h2.classList.add('text-[#1b0e0f]', 'text-base', 'font-bold', 'leading-tight');
  h2.textContent = product.title;

  const button = document.createElement('button');
  button.classList.add(
    'flex',
    'min-w-[84px]',
    'max-w-[480px]',
    'cursor-pointer',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'rounded-full',
    'h-8',
    'px-4',
    'flex-row-reverse',
    'bg-[#f3e7e8]',
    'text-[#1b0e0f]',
    'text-sm',
    'font-medium',
    'leading-normal',
    'w-fit',
  );
  button.textContent = 'Add to Cart';

  div3.appendChild(h2);
  div2.appendChild(div3);
  div2.appendChild(button);
  row.appendChild(div2);

  document.getElementById('main').appendChild(row);
}

*/

const totalPriceElement = document.getElementById('totalPriceId');
let total = parseInt(totalPriceElement.textContent);
const clearAllButton = document.getElementById('clearAllButton');


products.map((product) => {
  const addButton = document.getElementById(product.addButtonId);
  const removeButton = document.getElementById(product.removeButtonId);
  const decreaseButton = document.getElementById(product.decrease);
  const increaseButton = document.getElementById(product.increase);


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

  if (decreaseButton) {
    decreaseButton.addEventListener('click', () => {
      decreaseQuantity(product.quantityId, product.cartId, product.price);
    })
  }

  if (increaseButton) {
    increaseButton.addEventListener('click', () => {
      increaseQuantity(product.quantityId, product.price);
    })
  }
});

clearAllButton.addEventListener('click', () => clearAllCart());



function addToCart(cartId, quantityId) {
  const productCart = document.getElementById(cartId);
  const quantityElement = document.getElementById(quantityId);
  let quantity = parseInt(quantityElement.textContent);

  quantity++;

  productCart.classList.remove('hidden');
  quantityElement.textContent = quantity;

}

function removeFromCart(cartId, quantityId, price) {
  const productCart = document.getElementById(cartId);
  const quantityElement = document.getElementById(quantityId);
  let currentQuantity = parseInt(quantityElement.textContent);

  if (currentQuantity > 0) {
    subtractTotalPrice(currentQuantity * price);
    quantityElement.textContent = 0;
    productCart.classList.add('hidden');
  }

  if (currentQuantity === 0) {
    productCart.classList.add('hidden');
  }
}

function decreaseQuantity(quantityId, cartId, price) {

  const productCart = document.getElementById(cartId)
  const quantityElement = document.getElementById(quantityId);
  let currentQuantity = parseInt(quantityElement.textContent);

  if (currentQuantity > 1) {
    currentQuantity--;
    quantityElement.textContent = currentQuantity;
    subtractTotalPrice(price);
  } else if (currentQuantity === 1) {
    currentQuantity--;
    quantityElement.textContent = currentQuantity;
    subtractTotalPrice(price);
    productCart.classList.add('hidden');
  }
}

function increaseQuantity(quantityId, price) {
  const quantityElement = document.getElementById(quantityId);
  let quantity = parseInt(quantityElement.textContent);

  quantity++;

  quantityElement.textContent = quantity;
  addTotalPrice(price)
}

function addTotalPrice(price) {

  total += price;
  totalPriceElement.textContent = total;
}

function subtractTotalPrice(price) {
  total -= price;

  if (total < 0) total = 0;
  totalPriceElement.textContent = total;
}



function clearAllCart() {

  products.forEach(product => {
    const quantityElement = document.getElementById(product.quantityId);
    const cartElement = document.getElementById(product.cartId);

    if (quantityElement) quantityElement.textContent = 0;
    if (cartElement) cartElement.classList.add('hidden');
  });

  total = 0;
  totalPriceElement.textContent = 0;

}

