// https://leetcode.com/problems/two-sum/description/

// const twoSum = (arr, k) =>{
//     let remElem = [];
//     let resultArray = [];
//     for(let num of arr){
//         if(remElem.includes(num)){
//             resultArray.push(k - num);
//             resultArray.push(num);
//             return resultArray;
//         }
//         else{
//             remElem.push(k-num);
//         }
//     }

// };

const twoSum2 = (arr, k) => {
    let remElem = {};
    for(let num of arr){
        if(remElem[num]) {
            return [k - num, num];
        }
        else {
            remElem[k - num] = 1;
        }
    }
};
let arr = [2,11,15,7, -1];
let k=10;
let result = twoSum2(arr, k);
console.log(result);

