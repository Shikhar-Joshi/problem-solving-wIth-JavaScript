// console.log("Hello, World");

function minJumps(n, arr) {
	if(arr[1] === 0) {
		return 0;
	}
	let c = 0;
	let i=0;
	while(i<n) {
		c++;
		console.log('before if');
		console.log(c)
		if(i + arr[i] > n){
			c++;
			return c;
		} 
		i += arr[i];
		n -= i;
		console.log('index', i);
		
		console.log('after if');
		console.log(c);
	}

	return c;
}

let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
// let arr = [1, 4, 3, 2, 6, 7]
let n = 11;

let result = minJumps(n, arr);
console.log(result.toString());