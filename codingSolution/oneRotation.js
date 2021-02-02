// Question Link: https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/
const oneRotation = (arr) => {
    //shift methods simply removes and returns first element.
    let first = arr.shift();
    //push method add that element at last.
	arr.push(first);
	console.log(arr);
};

const arr = [3,4,5,6,7];
oneRotation(arr);