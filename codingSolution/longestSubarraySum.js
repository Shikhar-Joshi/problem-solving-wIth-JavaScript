// Question Link: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

function sumSubArray(arr, len) {
	
	//in case if there is only negative numbers in the array
	let result = Math.max(...arr);
	if(result < 0) {
		return result;
	}
	
	result = 0;
	const _ = arr.reduce((acc, value) =>{
		acc = acc + value > 0? acc + value :0;
		result = Math.max(acc, result);
		return acc;
	}, 0);
	return result;
}


const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let len = arr.length;
console.log(sumSubArray(arr, len));
