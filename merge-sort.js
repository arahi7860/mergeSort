const mergeSort = (array) => {
  // need a base case to check the length of our array is less than or equal to 1
  // so we don't cause infinite loops since we will be using recursion
  if (array.length <= 1) {
    return array;
  }
  // need to find the middle (rounded (Math.floor)) of our array
  const middle = Math.floor(array.length / 2);
  // now we have the middle we need to split the array in two
  // (left and right) using slice
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // using recursion, we will keep slicing our array until there the
  // length of the array is 1 or less (our base case)
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  // call our helper function that handles the merging
  // passing in two arguments (left and right)
  return merge(leftSorted, rightSorted);
};

const merge = (leftArray, rightArray) => {
  // declare a new array that we will return at the end
  // so we can merge our left and right arrays together
  const mergedArray = [];
  // using a while loop we will loop until we finish merging
  // both arrays together setting our condition as there are values
  // in both arrays
  while (leftArray.length && rightArray.length) {
    // using a if statement we need to start our comparing
    if (leftArray[0] < rightArray[0]) {
      // if left is less than right, push into our merge array
      mergedArray.push(leftArray.shift());
    } else {
      // if right is less than left, push into our merge array
      mergedArray.push(rightArray.shift());
    }
  }
  // return our array when our while loop is done
  // concatenating the left over arrays of left and right
  // with our mergedArray
  return mergedArray.concat(...leftArray).concat(...rightArray);
};

// test out our code
const testArray = [10, 4, 100, 22, 55, 8282, 1, 0, 5];
console.log(mergeSort(testArray));
