# Divide & Conquer Pt. 1 – Merge Sort

![sorting](https://media.giphy.com/media/9u514UZd57mRhnBCEk/giphy.gif)

There is a family of sorting algorithms that can improve time complexity from `O(n^2)` to `O(n (log n))`: the Divide & Conquer Sorting Algorithms.

For the efficiency we gain, there's a tradeoff of simplicty; the more efficient algorithms are more complex, and generally will take longer to understand on a gut level.

Before we jump in, a quick refresher on *recursion*.

<details><summary>What is recursion?</summary>
  <br>
  
  Recursion is a way of solving a problem where the solution of that problem depends on smaller instances of the same problem– in our applications, this means a function calling itself. 
  
</details>

<details><summary>What does recursion require?</summary>
  <br>
  
  Recursion requires both a *recursive case*– an input for which the function will call itself– and a *base case*- an input for which the recursion is stopped, preventing an infinite loop.
  
</details>

## The Merge Sort

The merge sort was created in 1945 by John Von Neumann.

![von neumann](https://user-images.githubusercontent.com/29616227/66724767-d2273280-edf7-11e9-81e3-a4a60716cdb6.jpg)

In practice, the merge sort is not _just_ a sort– rather, it's a combination of splitting and merging. This exploits the fact that a fully split array– making multiple arrays of 0 or 1 elements– are always sorted, before merging them back together in the correct order. 

Let's take a look at this, visually:

[mergeSort](https://opendsa-server.cs.vt.edu/embed/mergesortAV)

[![merge video](https://user-images.githubusercontent.com/29616227/66724892-4b735500-edf9-11e9-89cc-410410696300.jpg)](https://www.youtube.com/watch?v=XaqR3G_NVoo)

### Implementation

In order to implement merge sort, it's useful to first implement a helper function. This helper function will be responsible for the second phase, merging two sorted arrays; given two arrays which are sorted, this helper function should create a new array, the resulting sorted array, which consists of all of the elements from the two arrays.

### Big 0 Complexity

The time complexity of merge sort is `O(n (log n))` in all 3 cases (worst, average, and best) as merge sort always divides the array into two halves– **(log n)** complexity– and later merge those two halves– **linear complexity**.

![screenshot 2019-10-14 12 28 38](https://media.git.generalassemb.ly/user/19642/files/41476a00-ee7e-11e9-9168-e4ae2fca7ca0)

In other words, the number of times we can break it in half will be the base-2 logarithm of the number of inputs, and when we merge it we will visit each input once.

### Some Quick Notes:

- Merge sort doesn't care what the size of the data is. 
- It's going to merge it over and over no matter what the input is.
- It's time complexity is O(n log n)...
- `O(log n)` decompositions + `O(n)` Comparisons per decomposition
- `O(n (log n))` is the best we can do with a sorting algorithm

![bigo](https://user-images.githubusercontent.com/29616227/66772204-2e3a9700-ee8a-11e9-8796-c208932150b5.png)
