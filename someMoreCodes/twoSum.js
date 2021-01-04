// https://leetcode.com/problems/two-sum/description/

const twoSum = (arr, k) =>{
    let remElem = [];
    let resultArray = [];
    for(let num of arr){
        if(remElem.includes(num)){
            resultArray.push(Math.abs(k - num));
            resultArray.push(num);
            return resultArray;
        }
        else{
            remElem.push(Math.abs(k-num));
        }
    }
};

let arr = [2,7,11,15];
let k=9;

let remElem = twoSum(arr, k);
console.log(remElem);