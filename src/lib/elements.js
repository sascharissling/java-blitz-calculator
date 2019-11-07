export function createDivWithContent(content) {
  const divElement = document.createElement("div");
  divElement.innerHTML = content;
  return divElement;
}

export function appendElementToElement(parent, child) {
  parent.appendChild(child);
}
