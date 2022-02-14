// Common matchers https://jestjs.io/docs/using-matchers

test("two plus one is three", () => {
  expect(2 + 1).toBe(3);
  // expect (2+1) returns expectation object.
  // .toBe(3) is the matcher
});
// toBe uses Object.is to test exact equality.
// to check the value of an object use toEqual instead.

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// Numbers

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});

// --

// For floating point equality, use ToBeCloseTo instead of toEqual

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;

  // expect(value).toBe(0.3) // this won't work because of rounding error.

  expect(value).toBeCloseTo(0.3);
});

// ----

// Strings

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// ----

// Arrays and iterables

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

// -----

// Exceptions

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
