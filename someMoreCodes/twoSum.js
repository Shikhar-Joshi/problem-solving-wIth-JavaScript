// https://leetcode.com/problems/two-sum/description/

const twoSum = (arr, k) =>{
    let remElem = [];
    let resultArray = [];
    for(let num of arr){
        if(remElem.includes(num)){
            resultArray.push(k - num);
            resultArray.push(num);
            return resultArray;
        }
        else{
            remElem.push(k-num);
        }
    }

};

let arr = [2,11,15,7, -1];
let k=10;

let remElem = twoSum(arr, k);
console.log(remElem);
