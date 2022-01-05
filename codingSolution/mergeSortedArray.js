function mergeArray(arr1, n, arr2, m) {
  arr1 = [...arr1, ...arr2];
  arr1.sort((a, b) => a - b);
  arr2 = arr1.splice(n);
  console.log('arr1[] = ', arr1);
  console.log('arr2[] = ', arr2);
}

let n = 4,
  m = 5;
let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];

// let n = 2, m = 3;
// let arr1 = [10, 12];
// let arr2 = [5, 18, 20];

mergeArray(arr1, n, arr2, m);
