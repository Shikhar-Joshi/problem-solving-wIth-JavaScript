// Question Link: https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0

function unionHandler(arr1, arr2) {
    let union = {};
    for (let i = arr1.length - 1; i >= 0; --i)
        union[arr1[i]] = arr1[i];
    for (let i = arr2.length - 1; i >= 0; --i)
        union[arr2[i]] = arr2[i];
    let res = Object.keys(union).length;
    return res;
}

function intersectionHandler(arr1, arr2) {
    let arr1Index = 0,
        arr2Index = 0;
    let result = [];

    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            arr1Index++;
        } else if (arr1[arr1Index] > arr2[arr2Index]) {
            arr2Index++;
        } else {
            result.push(arr1[arr1Index]);
            arr1Index++;
            arr2Index++;
        }
    }

    return result.length;
}

let arr1 = [2, 5, 10, 45];
let arr2 = [1, 2, 3, 5, 6, 7];

console.log(intersectionHandler(arr1, arr2));
console.log(unionHandler(arr1, arr2));