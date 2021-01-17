




//1. Understanding merge sort
//numbers provided:  21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort? - 
// [21,1], [26,45],[29,28],[2,9],[16,49],[39,27],[43,34],[46,40]
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?- 
// 1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49
// What are the first 2 lists to be merged?- [21,1]
// Which two lists would be merged on the 7th merge?- [46,40] ( if it is following an array index which starts at 0)

// 2. Understanding quicksort

   //1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. 
   // After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. 
   // Which of the following statements is correct about the partition step? Explain your answer.

   // Answer: The pivot could have been either 14 or 17: because due to the values in the array the pivot can happen between 14 or 17

   // 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second 
   //partitioning according to the quicksort algorithm.

   //Answer: 
   //When using the last item on the list as a pivot
      // partition 1:[10, 17, 13, 15, 19, 14, 3, 16, 9, 12]
      //partition 2: [10, 3, 13, 15, 19, 14, 17, 16, 9, 12]
   // When using the first item on the list as a pivot
      // Partition 1: [14, 13, 17, 15, 19, 10, 3, 16, 9, 12]
      // Partition 2: [14, 13, 10, 15, 19, 17, 3, 16, 9, 12]


// 3. Implementing quicksort

function qSort(array, start = 0, end = array.length) {
   if (start >= end) {
       return array;
   }
   const middle = partition(array, start, end);
   array = qSort(array, start, middle);
   array = qSort(array, middle + 1, end);
   return array;
};

function partition(array, start, end) {
   const pivot = array[end - 1];
   let j = start;
   for (let i = start; i < end - 1; i++) {
       if (array[i] <= pivot) {
           swap(array, i, j);
           j++;
       }
   }
   swap(array, end-1, j);
   return j;
};

// 4. Implementing merge sort

function mSort(array) {
   if (array.length <= 1) {
       return array;
   }

   const middle = Math.floor(array.length / 2);
   let left = array.slice(0, middle);
   let right = array.slice(middle, array.length);

   left = mSort(left);
   right = mSort(right);
   return merge(left, right, array);
};

function merge(left, right, array) {
   let leftIndex = 0;
   let rightIndex = 0;
   let outputIndex = 0;
   while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
           array[outputIndex++] = left[leftIndex++];
       }
       else {
           array[outputIndex++] = right[rightIndex++];
       }
   }

   for (let i = leftIndex; i < left.length; i++) {
       array[outputIndex++] = left[i];
   }

   for (let i = rightIndex; i < right.length; i++) {
       array[outputIndex++] = right[i];
   }
   return array;
};

const data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'.split(' ');
const dataSet = data.map(num => parseInt(num));

// console.log(qsort(dataSet))
// console.log(mSort(dataSet))

// 5. Sorting a linked list using merge sort