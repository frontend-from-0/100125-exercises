let collection = Array.from(document.getElementsByTagName('img'));

for (const img of collection) {
  const altText = img.getAttribute('alt');

  if (altText && altText.trim()) {
    const parentElement = img.parentNode;
    const elP = document.createElement('p');
    const trimmedText = altText.trim();
    let childTextNode = document.createTextNode(trimmedText);
    elP.appendChild(childTextNode);
    parentElement.replaceChild(elP, img);
  } else {
    img.remove();
  }
}

