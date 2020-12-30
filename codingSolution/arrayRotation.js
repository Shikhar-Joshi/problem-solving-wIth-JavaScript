// Question Link: https://www.geeksforgeeks.org/array-rotation/

//function for left rotation
let leftRotate = (arr, d, n) =>{
	if(n < d){
		d %= n;
	}
	//splice will take out and return first d elements. In this case 4,5
	//unshift will add those elements in front of array
	arr.unshift(...arr.splice(d));
	
	//to make it right rotation replace d with -d
	return arr;
};

//testing values
let arr = [4,5,3,6,7];
let len = arr.length;
let k = 12;
let newArray = leftRotate(arr, k, len);

console.log(newArray);
