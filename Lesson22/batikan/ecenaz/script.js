// Increment quantity of an element in the cart when "add to cart button" on a product is clicked

// If remove item from cart is clicked, we will hide the item and set quantity to 0

// If we click 'clear cart', then we hide all elements in the cart

// If we add/remove an items to the cart, total price should be updated

const products = [
  {
    name: "apples",
    addButtonId: "apples_add",
    quantityId: "apples_quantity",
    removeButtonId: "apples_remove",
    cartId: "apples_cart",
    priceId: "apples_price",
    totalPriceElementId: "total_price",
  },
  {
    name: "bananas",
    addButtonId: "bananas_add",
    quantityId: "bananas_quantity",
    removeButtonId: "bananas_remove",
    cartId: "bananas_cart",
    priceId: "bananas_price",
  },
  {
    name: "bread",
    addButtonId: "bread_add",
    quantityId: "bread_quantity",
    removeButtonId: "bread_remove",
    cartId: "bread_cart",
    priceId: "bread_price",
  },
  {
    name: "eggs",
    addButtonId: "eggs_add",
    quantityId: "eggs_quantity",
    removeButtonId: "eggs_remove",
    cartId: "eggs_cart",
    priceId: "eggs_price",
  },
];

products.map((product) => {
  document.getElementById(product.addButtonId).addEventListener("click", () => {
    addToCart(product.cartId, product.quantityId);
    updateTotalPrice(product.priceId, product.quantityId);

    console.log(
      "Yeni toplam:",
      document.getElementById("total_price").textContent
    );
  });

  document
    .getElementById(product.removeButtonId)
    .addEventListener("click", () => {
      removeFromCart(product.cartId, product.quantityId);
      updateTotalPrice(product.priceId, product.quantityId);
    });

   document.getElementById("clear_cart").addEventListener("click", () => {
    clearCart(products);
  }); 

  /* document
  .getElementById("clear_cart")
  .addEventListener("click", () => {
    clearCartQuantities(products);
  }) */
});

function addToCart(cartId, quantityElementId) {
  const productCart = document.getElementById(cartId);
  const quantityElement = document.getElementById(quantityElementId);
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  productCart.classList.remove("hidden");
  quantityElement.textContent = quantity;
}

function removeFromCart(cartId, quantityId) {
  const productCart = document.getElementById(cartId);
  productCart.classList.add("hidden");
  const quantityElement = document.getElementById(quantityId);
  quantityElement.textContent = 0;
}

function updateTotalPrice() {
  let total = 0; // Start with a total of 0.

  products.forEach((product) => {
    const quantityElement = document.getElementById(product.quantityId);
    const priceElement = document.getElementById(product.priceId);

    if (quantityElement && priceElement) {
      let quantity = parseInt(quantityElement.textContent);
      let price = parseFloat(priceElement.textContent);
      if (isNaN(quantity)) quantity = 0;
      if (isNaN(price)) price = 0;
      total += quantity * price; // Add to total.
    }
  });

  document.getElementById("total_price").textContent = total;
}

function clearCart(products) {
  products.forEach((products) => {
    const productCart = document.getElementById(products.cartId);
    productCart.classList.add("hidden");

    const quantityElement = document.getElementById(products.quantityId);
    quantityElement.textContent = 0;
  });

  document.getElementById("total_price").textContent = 0;

  console.log("All products removed from cart. Cart is empty.");
}
 

// Another possible approach could be to keep the cart preview visible and only reset the quantity values. Naturally, the total amount would also reset to zero. I wrote this as an extra idea. Personally, I think the "clear cart" option, which removes everything, makes more sense, but I wanted to keep this idea here as well.

/* function clearCartQuantities(products) {

  products.forEach((products) => {
    const quantityElement = document.getElementById(products.quantityId);

    quantityElement.textContent = 0;

  });
  updateTotalPrice();

} */
