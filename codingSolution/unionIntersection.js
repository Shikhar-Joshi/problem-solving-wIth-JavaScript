// Question Link: https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0

function unionHandler(arr1, arr2) {
    let union = [...arr1, ...arr2];
    return union;
}
function intersectionHandler(arr1, arr2) {
    let intersectArrray = lodash.intersection(arr1, arr2);
    return intersectArrray;
}

let arr1 = [10,2,45,5];
let arr2 = [1,2,5,6,7];

console.log(intersectionHandler(arr1, arr2));
console.log(unionHandler(arr1, arr2));
