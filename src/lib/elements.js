export function createDivWithContent(content) {
  // create a new div element
  const newDiv = document.createElement("div");
  // and give it some content
  const newContent = newDiv.innerHTML;
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.querySelector(".equals");
  document.body.insertBefore(newDiv, currentDiv);
}

export function appendElementToElement(parent, child) {
  parent.appendChild(child);
}

// use https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// use https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML for content
// see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
