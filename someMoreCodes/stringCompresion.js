// Question Link: https://leetcode.com/problems/string-compression/

const solve = (arr) => {
	let idx = 0;
	let i = 0;
	let len = arr.length;
	while(i < len) {
		let j = i;
		//j will go to that index where value is different from previous value
		while(j < len && arr[j] == arr[i]) {
			j++;
		}
				
		arr[idx++] = arr[i];
		//this condition is helpful if the length of array is 1
		if(j - i > 1) {
			let count = j - i + "";
			for(let c of count){
				arr[idx++] = c;
			}
		}
		i = j;
	}
	return idx;
};

console.log(solve(['a', 'b', 'b', 'b', 'b', 'c']));
