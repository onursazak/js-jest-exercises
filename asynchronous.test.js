const { fetchData } = require("./example");

// CALLBACKS

// By default, Jest tests complete once they reach the end of their execution. That means this test will not work as intended:

// Don't do this!
// test("the data is peanut butter", () => {
//   function callback(data) {
//     expect(data).toBe("peanut butter");
//   }

//   fetchData(callback);
// });

// There is an alternate form of test that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called done.
// Jest will wait until the done callback is called before finishing the test.

// If done() is never called, the test will fail (with timeout error), which is what you want to happen.

// test("the data is peanut butter", (done) => {
//   function callback(data) {
//     expect(data).toBe("peanut butter");
//     done();
//   }

//   fetchData(callback);
// });

// -- End of CALLBACKS --

// -- Promises --

// If your code uses promises, there is a more straightforward way to handle asynchronous tests. Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

// test("the data is peanut butter", () => {
//   return fetchData().then((data) => {
//     expect(data).toBe("peanut butter");
//   });
// });

test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData().catch((error) => {
    expect(error).toMatch("error");
  });
});
