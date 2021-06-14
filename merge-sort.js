const merge = (leftArray, rightArray) => {

  // 1. create an array to hold the results

  // 2. write a loop that runs until one of the arrays is empty
  // each time through the loop, compare the first elements of both arrays
  // remove whichever is lower and add it to the results array

  // 3. squoosh them all together in order
  // use spread syntax or .concat to add the three arrays in order: results, left, right
  // and return the result!
  
};

// test it!
// console.log(merge([1,5,13,15], [2,3,6,8]))

const mergeSort = (array) => {
  // 1. establish a base case:
  // return the array if its length is less than 2

  // 2. find the center:
  // use Math.floor() and the array length to find an index close to the center

  // 3. split the array:
  // use the middle index and .slice or .splice to create a left and right array

  // 4. merge the arrays (sort of):
  // actually merge the /results/ or running mergeSort with the arrays!
  // meaning: the two arguments for merge will both be invocations of mergeSort, each with one of the arrays.

  // 5. return step 4
  // either in one step above, or here

};

// test out our code
const testArray = [10, 4, 100, 22, 55, 8282, 1, 0, 5];
console.log(mergeSort(testArray));
