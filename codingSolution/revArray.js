const revHandler = arr =>{
    var rev = new Array;
    for(let i=arr.length - 1;i >= 0; i--){
        rev.push(arr[i]);
    }
    return rev;
}

let arr1 = [6,4,2,9,8,3,10,45];
let arr2 = revHandler(arr1);

for(let i in arr2){
    console.log(arr2[i]);
}
