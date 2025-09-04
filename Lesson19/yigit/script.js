const imgElements = document.querySelectorAll('img');

imgElements.forEach(img => {
  const altText = img.getAttribute('alt');
  if (altText && altText.trim() !== '') {
    const p = document.createElement('p');
    p.textContent = altText;
    img.parentNode.replaceChild(p, img);
  } else {
    img.remove();
  }
});