// Question Link: https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1
const kMinMax = (arr, n, k) => {
    arr.sort((a,b) => a - b);
    let [k_min, k_max] = [arr[k - 1], arr[n - k]];
    return [k_min, k_max];
};

let arr = [ 45, 23, 85, 74, 36, 95, 100];
let k = 2;
let n = arr.length;
let values = kMinMax(arr, n, k);
console.log(values[0], values[1]);
