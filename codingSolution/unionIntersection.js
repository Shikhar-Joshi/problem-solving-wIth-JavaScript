// Question Link: https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0
class Operation{
    union(arr1, arr2) {
        let union = [...arr1, ...arr2];
        return union;
    }
    intersection(arr1, arr2) {
        let intersection = arr1.filter(x => arr2.includes(x));
        return intersection;
    }
}

let arr1 = [1,3,4,5];
let arr2 = [1,2,5,6,7];

const oper = new Operation();
console.log(oper.intersection(arr1, arr2));
