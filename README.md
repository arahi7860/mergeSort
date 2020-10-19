# Divide & Conquer Pt. 1 – Merge Sort

![sorting](https://media.giphy.com/media/9u514UZd57mRhnBCEk/giphy.gif)

- There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
- There's a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand

Created in 1945 by John Von Neumann
![von neumann](https://user-images.githubusercontent.com/29616227/66724767-d2273280-edf7-11e9-81e3-a4a60716cdb6.jpg)

- It's a combination of two things - merging and sorting! In fact, it's a combination of splitting up, sorting and merging.
- Exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by decomposing an array into smaller arrays of 1 element, then building up a newly sorted array.
- It is customary to implement mergeSort recursively.

[mergeSort](https://opendsa-server.cs.vt.edu/embed/mergesortAV)

[![merge video](https://user-images.githubusercontent.com/29616227/66724892-4b735500-edf9-11e9-89cc-410410696300.jpg)](https://www.youtube.com/watch?v=XaqR3G_NVoo)

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays

![screenshot 2019-10-14 12 28 38](https://media.git.generalassemb.ly/user/19642/files/41476a00-ee7e-11e9-9168-e4ae2fca7ca0)

Time complexity of Merge Sort is **O(nLogn)** in all 3 cases (worst, average and best) as merge sort always divides the array in two halves and take linear time to merge two halves.

In other words, the number of times we can break it in half will be the base-2 logarithm of the number of inputs, and when we merge it we will visit each input once.

- Merge sort doesn't care what the size of the data is. 
- It's going to merge it over and over no matter what the input is.
- It's time complexity is O(n log n)...
- O(log n) decompositions + O(n) Comparisons per decomposition
- O(n log n) is the best we can do with a sorting algorithm

![bigo](https://user-images.githubusercontent.com/29616227/66772204-2e3a9700-ee8a-11e9-8796-c208932150b5.png)
