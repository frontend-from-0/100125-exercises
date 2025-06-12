

const allImages = Array.from(document.getElementsByTagName('img')); 
// This is a live collection so I use Array.from to convert HTMLCollection to an array. Otherwise, We cannot use other array methods like forEach or for-of loop methods.

// const allImages = document.querySelectorAll('img'); 
// This is a static collection, so we can use any array methods directly. 

for (const imgElement of allImages) {
  const altText = imgElement.getAttribute('alt');

  if(altText !== null && altText !== ''){
const newText = document.createTextNode(altText);

const newParagraph= document.createElement('p');
newParagraph.appendChild(newText);

const parentElement = imgElement.parentNode; // Get the parent elemnt of the image. Because we want to insert the new paragraph.

if(parentElement) { 
  parentElement.replaceChild(newParagraph, imgElement); // Repalce the image with the new paragraph.

  console.log(`Image with alt text "${altText}" has been replaced with a paragraph.`);
  
} else {
  console.warn(`Parent element not found for image with alt text "${altText}".`);
  // If the parent element is not found we log the warning message.

} 
  } else { 
    console.warn(`Image with "${imgElement.src}" has no alt text or it is empty.`);
    // If the alt text is null or empty we log the warning message.
  }

};

// This code iterates through all images on the page, checks if they have alt text and replaces the image with a paragraph element containing the alt text. If the image has no alt text or it is empty, it logs a warning message to the console.




