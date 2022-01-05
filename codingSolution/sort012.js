// Question Link: https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

let arr = [0,0,1,1,2,1,1,2,0,0,2];
let low = 0, mid = 0;
let high = arr.length - 1;

while(mid <= high){
	switch(arr[mid]){
		case 0:
			[arr[mid], arr[low]] = [arr[low], arr[mid]];
			mid++; low++;
			break;
		case 1:
			mid++;
			break;
		
		case 2:
			[arr[mid], arr[high]] = [arr[high], arr[mid]];
			high--;
			break;
	}
}
console.log(arr);
