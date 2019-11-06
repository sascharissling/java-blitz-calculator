import { createDivWithContent } from "./elements";

test("creates div element with 323", function() {
  const divElement = createDivWithContent(323);
  expect(divElement.outerHTML).toBe("<div>323</div>");
});

test("creates div element with -213", function() {
  const divElement = createDivWithContent(-213);
  expect(divElement.outerHTML).toBe("<div>-213</div>");
});

test("creates div element with TEXT", function() {
  const divElement = createDivWithContent("TEXT");
  expect(divElement.outerHTML).toBe("<div>TEXT</div>");
});
