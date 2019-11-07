export function createDivWithContent(content) {
  const divElement = document.createElement("div");
  divElement.innerHTML = content;
  return divElement;
}

export function appendElementToElement(parent, child) {
  parent.appendChild(child);
}

// use https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// use https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML for content
// see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
