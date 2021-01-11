// Question Link: https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/
let arr = [ 45, 23, 85, 74, 36, 95, 100];
let len = arr.length - 1;
// using array destructuring    
let max, min = [Math.max(...arr), Math.min(...arr)];
console.log(max, min)