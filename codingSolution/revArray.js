// Question Link: https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/
const revHandler = arr =>{
    var rev = [];
    for(let i=arr.length - 1;i >= 0; i--){
        rev.push(arr[i]);
    }
    return rev;
}

let arr1 = [6,4,2,9,8,3,10,45];
let result = revHandler(arr1);

console.log(result);