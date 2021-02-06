function sumSubArray(arr) {
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


const arr = [-8, -3, -6, -2, -5, -4];
console.log(sumSubArray(arr));
 
