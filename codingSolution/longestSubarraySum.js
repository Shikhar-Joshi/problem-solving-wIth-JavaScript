function sumSubArray(arr) {
	let updated_sum = 0;
	const result = arr.reduce((acc, value) =>{
		acc = acc + value > 0? acc + value :0;
		updated_sum = Math.max(acc, updated_sum);
		return acc;
	}, 0);
	console.log(updated_sum);
}


const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
sumSubArray(arr);
 
