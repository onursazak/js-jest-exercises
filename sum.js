function sum(a, b) {
  return a + b;
}
const testObj = { id: 1, name: "Onur" };

const types = {
  _null: null,
  _undefined: undefined,
  _false: false,
  _true: true,
  testString: 'test string..'
};

module.exports = {
  testObj,
  sum,
  types,
};
