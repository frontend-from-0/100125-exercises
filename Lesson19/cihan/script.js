const images = document.querySelectorAll('img');

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  const altText = img.getAttribute('alt');

  if (altText) {
    const p = document.createElement('p');
    p.textContent = altText;
    img.parentNode.replaceChild(p, img);
  }
}