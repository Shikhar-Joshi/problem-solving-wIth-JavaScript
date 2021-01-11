// Question Link: https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/
const swap = (num1, num2) =>{
	num1 = num1^num2;
	num2 = num1^num2;
	num1 = num1^num2;
	
	return [num1, num2];
};

const moveNegative = (arr) =>{
    const pivot = 0;
    let i = -1, len = arr.length;
    for(let j=0;j<len;j++){
        if(arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = swap(arr[i], arr[j]);
        }
    }
    return arr;
};

const arr = [-2, 2, 4, 5, 6, -4, -5, -10];
console.log(moveNegative(arr));
