const fetchData = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve("peanut butter");
    // }, 1500);
    reject("error");
  });
};

module.exports = { fetchData };
