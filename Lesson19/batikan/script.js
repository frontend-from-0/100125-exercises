let collection = Array.from(document.getElementsByTagName('img'));

for (const img of collection) {
  const altText = img.getAttribute('alt');
  const trimmedText = altText.trim();

  if (altText && trimmedText) {
    const imageParent = img.parentNode;
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = trimmedText;
    imageParent.replaceChild(paragraphElement, img);
  } else {
    img.remove();
  }
}

