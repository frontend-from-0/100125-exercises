let cart = {};
let allProducts = [];
let currentPage = 1;
const itemsPerPage = 4;

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
  row.id = `product-card-${product.id}`;

  const div2 = document.createElement('div');
  div2.classList.add('flex', 'items-stretch', 'justify-between', 'gap-4', 'rounded-xl');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('w-full', 'bg-center', 'aspect-video', 'bg-cover', 'rounded-xl', 'flex-1')
  const imgElement = document.createElement('img');
  imgElement.classList.add('w-full', 'bg-center', 'aspect-video', 'bg-cover', 'rounded-xl', 'flex-1');
  imgElement.src = product.thumbnail;
  imgElement.alt = 'Product picture';

  const div3 = document.createElement('div');
  div3.classList.add('flex', 'flex-[2_2_0px]', 'flex-col', 'gap-4');

  const buttonParentContainer = document.createElement('div');
  buttonParentContainer.classList.add('flex', 'gap-1', 'items-center');

  const currencySign = document.createElement('span');
  currencySign.classList.add('text-sm', 'mr-0');
  currencySign.textContent = '$';

  const price = document.createElement('span');
  price.classList.add('mr-4');
  price.id = `price-${product.id}`;
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
    'hover:bg-[#e8d5d8]',
    'transition-colors',
    'duration-300'
  );
  button.textContent = 'Add to Cart';

  // Even listener for add to cart button
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
  imgContainer.appendChild(imgElement);
  div2.appendChild(imgContainer);
  row.appendChild(div2);
  document.getElementById('products-container').appendChild(row);
}

function showNotification(productId, message) {
  const existingNotification = document.querySelector(`#notification-${productId}`);
  if (existingNotification) {
    existingNotification.remove();
  }

  const productCard = document.getElementById(`product-card-${productId}`);
  const notification = document.createElement('p');
  notification.id = `notification-${productId}`;
  notification.classList.add(
    'notification',
    'text-[#422006]',
    'text-sm',
    'font-normal',
    'py-2',
    'mt-2',
    'mb-2'
  );
  notification.textContent = message;

  productCard.appendChild(notification);

  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
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

  showNotification(product.id, `${product.title} added to cart!`);
  renderCart();
  updateTotalPrice();
}

function removeFromCart(productId) {
  delete cart[productId];


  const totalPages = Math.ceil(Object.keys(cart).length / itemsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  } else if (totalPages === 0) {
    currentPage = 1;
  }

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
  currentPage = 1;
  renderCart();
  updateTotalPrice();
}

function changePage(page) {
  const totalPages = Math.ceil(Object.keys(cart).length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderCart();
  updateTotalPrice();
}

// Pagination

function renderPagination() {
  const cartItems = Object.values(cart);
  const totalPages = Math.ceil(cartItems.length / itemsPerPage);

  if (totalPages <= 1) {
    return '';
  }

  let paginationHTML = `
            <div class="flex items-center  gap-2 pl-0 pr-4 py-2">
              <button onclick="changePage(${currentPage - 1})" 
                      class="flex items-center justify-center w-8 h-8 rounded-full ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#f3e7e8] text-[#1b0e0f] cursor-pointer hover:bg-[#e8d5d8] transition-colors duration-300'} text-sm font-medium"
                      ${currentPage === 1 ? 'disabled' : ''}>
                ← 
              </button>
          `;

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
              <button onclick="changePage(${i})" 
                      class="flex items-center justify-center w-8 h-8 rounded-full ${i === currentPage ? 'bg-[#1b0e0f] text-white' : 'bg-[#f3e7e8] text-[#1b0e0f] hover:bg-[#e8d5d8]'} text-sm font-medium cursor-pointer transition-colors">
                ${i}
              </button>
            `;
  }

  paginationHTML += `
              <button onclick="changePage(${currentPage + 1})" 
                      class="flex items-center justify-center w-8 h-8 rounded-full ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#f3e7e8] text-[#1b0e0f] cursor-pointer hover:bg-[#e8d5d8] transition-colors duration-300'} text-sm font-medium"
                      ${currentPage === totalPages ? 'disabled' : ''}>
                →
              </button>
            </div>
          `;

  return paginationHTML;
}

function renderCart() {
  const cartContainer = document.getElementById('cartPreview-container');

  if (Object.keys(cart).length === 0) {
    cartContainer.innerHTML = '';
    return;
  }

  const cartItems = Object.values(cart);
  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = cartItems.slice(startIndex, endIndex);

  let cartHTML = `
            <div class="">
              <h2 class="text-[#1b0e0f] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Cart Preview
              </h2>
          `;

  currentItems.forEach(item => {
    cartHTML += `
              <div id="${item.id}_cart" class="flex items-center gap-4 bg-[#fcf8f8] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14">
                       <img class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" src="${item.thumbnail}" alt="Product picture">
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
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-[#f3e7e8] text-[#1b0e0f] text-sm font-medium cursor-pointer hover:bg-[#e8d5d8] transition-colors duration-300">
                          −
                        </button>
                        <span id="${item.id}_quantity" 
                              class="text-[#1b0e0f] text-sm font-medium min-w-[20px] text-center">
                          ${item.quantity}
                        </span>
                        <button id="${item.id}_increase" 
                                class="flex items-center justify-center w-6 h-6 rounded-full bg-[#f3e7e8] text-[#1b0e0f] text-sm font-medium cursor-pointer hover:bg-[#e8d5d8] transition-colors duration-300">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shrink-0">
                  <button id="${item.id}_remove" 
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f3e7e8] text-[#1b0e0f] text-sm font-medium leading-normal w-fit hover:bg-[#e8d5d8] transition-colors duration-300">
                    Remove
                  </button>
                </div>
              </div>
            `;
  });

  cartHTML += `
              <div class="px-4 py-2 border-t border-[#f3e7e8]">
                <p class="text-[#974e52] text-sm font-normal leading-normal">
                  Total Price: $<span id="totalPriceId">0</span>
                </p>
              </div>
          `;

  cartHTML += `
              <div class="flex px-4 py-3 justify-between items-center">
                <div class="flex-1">
                  ${renderPagination()}
                </div>
                <button id="clearAllButton" 
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f3e7e8] text-[#1b0e0f] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e8d5d8] transition-colors duration-300">
                  Clear Cart
                </button>
              </div>
            </div>
          `;

  cartContainer.innerHTML = cartHTML;

  // Event listeners for current page items

  currentItems.forEach(item => {
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