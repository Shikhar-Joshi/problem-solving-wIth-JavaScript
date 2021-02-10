// Question Link: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

function sumSubArray(arr, len) {
	
	//in case if there is only negative numbers in the array
	let max_sum = Math.max(...arr);
	if(max_sum < 0) {
		return max_sum;
	}
	
	max_sum = 0;
	const _ = arr.reduce((acc, value) =>{
		acc = acc + value > 0? acc + value :0;
		max_sum = Math.max(acc, max_sum);
		return acc;
	}, 0);
	return max_sum;
}


const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let len = arr.length;
console.log(sumSubArray(arr, len));
