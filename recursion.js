const countDown = (num) => {
  
  if (num < 1) {
    return num
  }
  
  console.log("COUNT: ", num)
  return countDown(num - 1);

};

console.log("The return at the end", countDown(10));
