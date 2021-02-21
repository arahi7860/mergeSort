const countDown = (num) => {
  if (num > 0) {
    // recursively calling our function until it hits the base case
    console.log(num);
    return countDown(num - 1);
  } else {
    // base case
    return num;
  }
};

console.log("The return at the end", countDown(10));
