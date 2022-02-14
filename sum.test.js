const { sum, testObj, types } = require("./sum");

test("toplama testi", () => {
  expect(sum(1, 2)).toBe(3);
});

test("compare objects", () => {
  expect(testObj).toEqual({ id: 1, name: "Onur" });
});

test("truthiness", () => {
  // toBeNull matches only null
  // toBeUndefined matches only undefined
  // toBeDefined is the opposite of toBeUndefined
  // toBeTruthy matches anything that an if statement treats as true
  // toBeFalsy matches anything that an if statement treats as false

  expect(types._null).toBeNull();
  expect(types._undefined).toBeUndefined();
  expect(types.testString).toBeDefined();
  expect(types.testString).toBeTruthy();
  expect(types._true).toBeFalsy();
});
