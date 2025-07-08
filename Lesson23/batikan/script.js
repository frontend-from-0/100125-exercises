let cart = {};
let allProducts = [];

const apiRequest = fetch('https://dummyjson.com/products?limit=10')
  .then((res) => res.json())
  .then((data) => {
    console.log('data.products', data.products);
    allProducts = [...data.products];
    for (let i = 0; i < allProducts.length; i++) {
      createProductCard(allProducts[i]);
    }
  })
  .catch((error) => console.error(error));

console.log('apiRequest', apiRequest);

function createProductCard(product) {
  const row = document.createElement('div');
  row.classList.add('p-4');

  const div2 = document.createElement('div');
  div2.classList.add('flex', 'items-stretch', 'justify-between', 'gap-4', 'rounded-xl');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('w-full', 'bg-center', 'bg-no-repeat', 'aspect-video', 'bg-cover', 'rounded-xl', 'flex-1');
  imgContainer.style.backgroundImage = `url('${product.thumbnail}')`;

  const div3 = document.createElement('div');
  div3.classList.add('flex', 'flex-[2_2_0px]', 'flex-col', 'gap-4');

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
  button.id = `addButton_${product.id}`;
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

  button.addEventListener('click', () => addToCart(product));

  const div4 = document.createElement('div');
  div4.classList.add('flex', 'flex-col', 'gap-4');

  const h2 = document.createElement('h2');
  h2.classList.add('text-[#1b0e0f]', 'text-base', 'font-bold', 'leading-tight');
  h2.textContent = product.title;

  const productDetails = document.createElement('p');
  productDetails.classList.add('text-[#974e52]', 'text-sm', 'font-normal', 'leading-6');
  productDetails.textContent = product.description;

  div4.appendChild(h2);
  div4.appendChild(productDetails);
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

function addToCart(product) {
  if (cart[product.id]) {
    cart[product.id].quantity += 1;
  } else {
    cart[product.id] = {
      ...product,
      quantity: 1
    };
  }

  renderCart();
  updateTotalPrice();
}

function removeFromCart(productId) {
  delete cart[productId];
  renderCart();
  updateTotalPrice();
}

function updateQuantity(productId, change) {
  if (cart[productId]) {
    cart[productId].quantity += change;

    if (cart[productId].quantity <= 0) {
      removeFromCart(productId);
    } else {
      renderCart();
      updateTotalPrice();
    }
  }
}

function clearCart() {
  cart = {};
  renderCart();
  updateTotalPrice();
}

function renderCart() {
  const cartContainer = document.getElementById('cartPreview-container');

  if (Object.keys(cart).length === 0) {
    cartContainer.innerHTML = '';
    return;
  }

  let cartHTML = `
    <div class="">
      <h2 class="text-[#1b0e0f] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Cart Preview
      </h2>
  `;

  // Add each cart item

  Object.values(cart).forEach(item => {
    cartHTML += `
      <div id="${item.id}_cart" class="flex items-center gap-4 bg-[#fcf8f8] px-4 min-h-[72px] py-2 justify-between">
        <div class="flex items-center gap-4">
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
               style="background-image: url('${item.thumbnail}');">
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-[#1b0e0f] text-base font-medium leading-normal line-clamp-1">
              ${item.title}
            </p>
            <div class="flex items-center gap-2">
              <span class="text-[#974e52] text-sm font-normal leading-normal">
                Quantity:
              </span>
              <div class="flex items-center gap-2">
                <button id="${item.id}_decrease" 
                        class="flex items-center justify-center w-6 h-6 rounded-full bg-[#f3e7e8] text-[#1b0e0f] text-sm font-medium cursor-pointer hover:bg-[#e8d5d8]">
                  −
                </button>
                <span id="${item.id}_quantity" 
                      class="text-[#1b0e0f] text-sm font-medium min-w-[20px] text-center">
                  ${item.quantity}
                </span>
                <button id="${item.id}_increase" 
                        class="flex items-center justify-center w-6 h-6 rounded-full bg-[#f3e7e8] text-[#1b0e0f] text-sm font-medium cursor-pointer hover:bg-[#e8d5d8]">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0">
          <button id="${item.id}_remove" 
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f3e7e8] text-[#1b0e0f] text-sm font-medium leading-normal w-fit">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  // Total price and clear cart button

  cartHTML += `
      <p class="text-[#974e52] text-sm font-normal leading-normal pb-3 pt-1 px-4">
        Total Price: $<span id="totalPriceId">0</span>
      </p>
      <div class="flex px-4 py-3 justify-end">
        <button id="clearAllButton" 
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f3e7e8] text-[#1b0e0f] text-sm font-bold leading-normal tracking-[0.015em]">
          Clear Cart
        </button>
      </div>
    </div>
  `;

  cartContainer.innerHTML = cartHTML;

  Object.values(cart).forEach(item => {
    document.getElementById(`${item.id}_increase`).addEventListener('click', () => {
      updateQuantity(item.id, 1);
    });

    document.getElementById(`${item.id}_decrease`).addEventListener('click', () => {
      updateQuantity(item.id, -1);
    });

    document.getElementById(`${item.id}_remove`).addEventListener('click', () => {
      removeFromCart(item.id);
    });
  });

  document.getElementById('clearAllButton').addEventListener('click', clearCart);
}

function updateTotalPrice() {
  const total = Object.values(cart).reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  const totalElement = document.getElementById('totalPriceId');
  if (totalElement) {
    totalElement.textContent = total.toFixed(2);
  }
}