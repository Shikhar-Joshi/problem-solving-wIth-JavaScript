// Question Link: https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

const minMax = (arr) => {
    arr.sort((a, b) => a - b);
    return [arr[0], arr[arr.length - 1]];
};

let arr = [ 45, 23, 85, 74, 36, 95, 100];  
let [min, max] = minMax(arr);
console.log(min, max);