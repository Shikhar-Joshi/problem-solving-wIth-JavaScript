// Question Link: https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

const minMax = (arr) => {
    let len = arr.length;
    let max, min;
    if(len === 1){
        max = arr[0];
        min = arr[0];
    }
    else {
        if(arr[0] < arr[1]) {
            max = arr[1];
            min = arr[0];
        }
        else {
            max = arr[0];
            min = arr[1];
        }
        for (let i = 2; i < len; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
            else if (min > arr[i]) {
                min = arr[i];
            }
        }
    }
    if(len === 0){
        console.log('Invalid Input');
        return ;
    }
    return [min, max];
};

let arr = [45, 23, 85, 74, 36, 95, 100];
let [min, max] = minMax(arr);
console.log(min, max);