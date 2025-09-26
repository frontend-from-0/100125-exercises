document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('products_container');
  const loading = document.getElementById('loading');

  try {
    // 1) Fetch products (max 10)
    const res = await fetch('https://dummyjson.com/products?limit=10');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const items = data.products || [];

    // Clear loading state
    if (loading) loading.remove();

    // 2) Dynamically create HTML for each product
    items.forEach((p) => {
      const card = document.createElement('div');
      card.className =
        'flex items-stretch justify-between gap-4 rounded-xl bg-white/0';

      // left side: title, description, price, button
      const left = document.createElement('div');
      left.className = 'flex flex-[2_2_0px] flex-col gap-3';

      const title = document.createElement('p');
      title.className = 'text-[#1b0e0f] text-base font-bold leading-tight';
      title.textContent = p.title;

      const desc = document.createElement('p');
      desc.className = 'text-[#974e52] text-sm leading-normal';
      desc.textContent = p.description;

      const price = document.createElement('p');
      price.className = 'text-[#1b0e0f] text-sm font-medium';
      price.textContent = `$${p.price}`;

      const btn = document.createElement('button');
      btn.className =
        'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#f3e7e8] text-[#1b0e0f] text-sm font-medium leading-normal w-fit';
      btn.textContent = 'Add to Cart';


      btn.addEventListener('click', () => {
      
        console.log(`Added: ${p.title} (id: ${p.id})`);
       
      });

      left.appendChild(title);
      left.appendChild(desc);
      left.appendChild(price);
      left.appendChild(btn);

      const right = document.createElement('div');
      right.className =
        'w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1';
      right.style.backgroundImage = `url('${p.thumbnail}')`;

      card.appendChild(left);
      card.appendChild(right);

      container.appendChild(card);
    });

  
    if (items.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'text-sm text-[#974e52] px-1';
      empty.textContent = 'No products found.';
      container.appendChild(empty);
    }
  } catch (err) {
    if (loading) loading.textContent = 'Failed to load products.';
    console.error(err);
  }
});
