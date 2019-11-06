test("creates div element with 323", function() {
  const element = createDivWithContent(323);
  expect(divElement.outerHTML).toBe("<div>323</div>");
});

test("creates div element with -213", function() {
  const element = createDivWithContent(323);
  expect(divElement.outerHTML).toBe("<div>-213</div>");
});

test("creates div element with TEXT", function() {
  const element = createDivWithContent(323);
  expect(divElement.outerHTML).toBe("<div>TEXT</div>");
});
