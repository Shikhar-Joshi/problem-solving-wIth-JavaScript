// Question Link: https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/
const swap = (num1, num2) =>{
	num1 = num1^num2;
	num2 = num1^num2;
	num1 = num1^num2;
	
	return [num1, num2];
};

let arr = [0,0,1,1,1,1,1,2,0,0,2];
let low = 0, mid = 0;
let high = arr.length - 1;

while(mid <= high){
	switch(arr[mid]){
		case 0:
			[arr[mid], arr[low]] = swap(arr[mid], arr[low]);
			mid++; low++;
			break;
		case 1:
			mid++;
			break;
		
		case 2:
			[arr[mid], arr[high]] = swap(arr[mid], arr[high]);
			high--;
			break;
	}
}
console.log(arr);

