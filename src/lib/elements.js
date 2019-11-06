export function createDivWithContent(content) {
  // use https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("Hi there and greetings!");
  // use https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML for content
}

export function appendElementToElement(parent, child) {
  // see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  parent.appendChild(child);
}
