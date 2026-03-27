const productsContainer = document.getElementById("products-container");
const totalPriceElement = document.getElementById("totalPriceId");
let total = 0;

const cartList = document.getElementById("cartList");

const apiRequest = fetch("https://dummyjson.com/products?limit=10") //This line uses the fetch API to make a network request to the specified URL. The URL requests up to 10 product items from the dummy JSON API.
  .then((res) => res.json()) //This handles the response from the server. It takes the response object (res) and parses it as JSON.
  .then((data) => {
    console.log("data.products", data.products);
    const allProducts = [...data.products]; //This line creates a new array allProducts containing the product data from the API response.

    for (let i = 0; i < allProducts.length; i++) {
      createProductCart(allProducts[i]);
    }
  })
  .catch((error) => console.error(error));

console.log("apiRequest", apiRequest);

function createProductCart(product) {
  const row = document.createElement("div");
  row.classList.add("p-4");

  const div2 = document.createElement("div");
  div2.classList.add(
    "flex",
    "items-stretch",
    "justify-between",
    "gap-4",
    "rounded-xl"
  );

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(
    "w-full",
    "bg-center",
    "bg-no-repeat",
    "aspect-video",
    "bg-cover",
    "rounded-xl",
    "flex-1"
  );
  // imgContainer.style.backgroundImage = "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1QNTi5731zfjftg6462ZUTS-SNKWyZaBemhWwguzCJ2rBvyQFkqQDK9q_R8IYTBo7pWk-BZWSMK8X0wW53ca4LMyGtLHRxNKx-2fPDY6p9sKITYLuYf5lHmvNkBFyeeBKBIuZuU7hyjnGufzHZNLygZTG0a_KsGetu6bAm6_FF03MUYHfAhWWEwGNGcBHMD1s3TtOKOEcV8_d_scuDtgluGfYzgfnc0KEd3wojK4zRr3j4gQBfXTmD81v-7uqWq8Fk7DgmSA7ixs')";
  imgContainer.style.backgroundImage = `url('${product.thumbnail}')`;

  const div3 = document.createElement("div");
  div3.classList.add("flex", "flex-[2_2_0px]", "flex-col", "gap-4");

  const div4 = document.createElement("div");
  div4.classList.add("flex", "flex-col", "gap-4");

  const h2 = document.createElement("h2");
  h2.classList.add("text-[#1b0e0f]", "text-base", "font-bold", "leading-tight");
  h2.textContent = product.title;

  const productDetails = document.createElement("p");
  productDetails.classList.add(
    "text-[#974e52]",
    "text-sm",
    "font-normal",
    "leading-6"
  );
  productDetails.textContent = product.description;

  const buttonParentContainer = document.createElement("div");
  buttonParentContainer.classList.add("flex", "gap-1", "items-center");

  const currencySign = document.createElement("span");
  currencySign.classList.add("text-sm", "mr-0");
  currencySign.textContent = "$";

  const price = document.createElement("span");
  price.classList.add("mr-4");
  price.id = "price";
  price.textContent = product.price;

  const button = document.createElement("button");
  button.id = "addButton`";
  button.classList.add(
    "flex",
    "min-w-[84px]",
    "max-w-[480px]",
    "cursor-pointer",
    "items-center",
    "justify-center",
    "overflow-hidden",
    "rounded-full",
    "h-8",
    "px-4",
    "flex-row-reverse",
    "bg-[#f3e7e8]",
    "text-[#1b0e0f]",
    "text-sm",
    "font-medium",
    "leading-normal",
    "w-fit"
  );
  button.textContent = "Add to Cart";

  button.addEventListener("click", () => {
    total += product.price;
    totalPriceElement.textContent = total;

    // Check if the item is already in the cart
    let existingCartItem = document.querySelector(
      `li[data-id="${product.id}"]`
    );

    if (existingCartItem) {
      // Increase quantity if it already exists
      let countSpan = existingCartItem.querySelector(".item-count");
      let count = parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count;
    } else {
      // Create new item if it's not in the cart
      const cartItem = document.createElement("li");
      cartItem.setAttribute("data-id", product.id);
      cartItem.innerHTML = `${product.title} - $${product.price} × <span class="item-count">1</span>`;
      cartList.appendChild(cartItem);
    }
  });

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
  document.getElementById("products-container").appendChild(row);
}

// --- Clear Cart Button ---
document.getElementById("clearAllButton").addEventListener("click", clearCart);

function clearCart() {
  total = 0;
  totalPriceElement.textContent = total;
  cartList.innerHTML = "";
}
