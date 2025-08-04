
const productsContainer = document.getElementById('products-container');
const totalPriceElement = document.getElementById('totalPriceId');
let total = 0;

const apiRequest = fetch('https://dummyjson.com/products?limit=10')//This line uses the fetch API to make a network request to the specified URL. The URL requests up to 10 product items from the dummy JSON API.
  .then((res) => res.json())//This handles the response from the server. It takes the response object (res) and parses it as JSON.
  .then((data) => {
    console.log('data.products', data.products);
    const allProducts = [...data.products];//This line creates a new array allProducts containing the product data from the API response.


    for (let i = 0; i < allProducts.length; i++) {
      createProductCart(allProducts[i]);
    }
  })
  .catch((error) => console.error(error));

console.log('apiRequest', apiRequest);

function createProductCart(product) {
  const row = document.createElement('div');
  row.classList.add('p-4');

  const div2 = document.createElement('div');
  div2.classList.add('flex', 'items-stretch', 'justify-between', 'gap-4', 'rounded-xl');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('w-full', 'bg-center', 'bg-no-repeat', 'aspect-video', 'bg-cover', 'rounded-xl', 'flex-1');
  // imgContainer.style.backgroundImage = "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1QNTi5731zfjftg6462ZUTS-SNKWyZaBemhWwguzCJ2rBvyQFkqQDK9q_R8IYTBo7pWk-BZWSMK8X0wW53ca4LMyGtLHRxNKx-2fPDY6p9sKITYLuYf5lHmvNkBFyeeBKBIuZuU7hyjnGufzHZNLygZTG0a_KsGetu6bAm6_FF03MUYHfAhWWEwGNGcBHMD1s3TtOKOEcV8_d_scuDtgluGfYzgfnc0KEd3wojK4zRr3j4gQBfXTmD81v-7uqWq8Fk7DgmSA7ixs')";
imgContainer.style.backgroundImage = `url('${product.thumbnail}')`;



  const div3 = document.createElement('div');
  div3.classList.add('flex', 'flex-[2_2_0px]', 'flex-col', 'gap-4');

 const div4 = document.createElement('div');
  div4.classList.add('flex', 'flex-col', 'gap-4');

  const h2 = document.createElement('h2');
  h2.classList.add('text-[#1b0e0f]', 'text-base', 'font-bold', 'leading-tight');
  h2.textContent = product.title;

  const productDetails = document.createElement('p');
  productDetails.classList.add('text-[#974e52]', 'text-sm', 'font-normal', 'leading-6');
  productDetails.textContent = product.description;

  const buttonParentContainer = document.createElement('div');
  buttonParentContainer.classList.add('flex', 'gap-1', 'items-center');

  const currencySign = document.createElement('span');
  currencySign.classList.add('text-sm', 'mr-0');
  currencySign.textContent = '$';

  const price = document.createElement('span');
  price.classList.add('mr-4');
  price.id = 'price'
  price.textContent = product.price;

  const button = document.createElement('button');
  button.id = 'addButton`'
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

  button.addEventListener('click', () => {
    total += product.price;
    totalPriceElement.textContent = total;
    alert(`"${product.title}" added to cart!`);
  });
  




  div4.appendChild(h2)
  div4.appendChild(productDetails)
  div3.appendChild(div4);
  buttonParentContainer.appendChild(currencySign);
  buttonParentContainer.appendChild(price);
  buttonParentContainer.appendChild(button);
  div3.appendChild(buttonParentContainer);
  div2.appendChild(div3);
  div2.appendChild(imgContainer);
  row.appendChild(div2);
  document.getElementById('products-container').appendChild(row);
}




// --- Clear Cart Button ---
document.getElementById('clearAllButton').addEventListener('click', clearCart);

function clearCart() {
  total = 0;
  totalPriceElement.textContent = total;
}

/*

const cartPreview = [
  {
    quantityId: 'apples_quantity',
    removeButtonId: 'apples_remove',
    cartId: 'apples_cart',
    decrease: 'apples_decrease',
    increase: 'apples_increase',
    price: 'price'
  },
  {
    quantityId: 'bananas_quantity',
    removeButtonId: 'bananas_remove',
    cartId: 'bananas_cart',
    decrease: 'bananas_decrease',
    increase: 'bananas_increase',
    price: 'price'
  },
  {
    quantityId: 'bread_quantity',
    removeButtonId: 'bread_remove',
    cartId: 'bread_cart',
    decrease: 'bread_decrease',
    increase: 'bread_increase',
    price: 'price'
  },
  {
    quantityId: 'eggs_quantity',
    removeButtonId: 'eggs_remove',
    cartId: 'eggs_cart',
    decrease: 'eggs_decrease',
    increase: 'eggs_increase',
    price: 'price'

  },
]

cartPreview.map((product) => {
  document
    .getElementById(product.removeButtonId)
    .addEventListener('click', () =>
      removeFromCart(product.cartId, product.quantityId),
    );
});


const totalPriceElement = document.getElementById('totalPriceId');
let total = parseInt(totalPriceElement.textContent);
const clearAllButton = document.getElementById('clearAllButton');


const addButton = document.getElementById('addButton');
const removeButton = document.getElementById(product.removeButtonId);
const decreaseButton = document.getElementById(product.decrease);
const increaseButton = document.getElementById(product.increase);



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
/*
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


clearAllButton.addEventListener('click', () => clearAllCart());



function addToCart(cartId, quantityId) {
 const productCart = document.getElementById(cartId);
 const quantityElement = document.getElementById(quantityId);
 let quantity = parseInt(quantityElement.textContent);

 quantity++;

 productCart.classList.remove('hidden');
 quantityElement.textContent = quantity;

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

}*/