// Question Link: https://leetcode.com/problems/valid-anagram/

function solve(a, b) {
	if(a.length !== b.length) {
		return false;
	}	
	
	let counts = [];
	for(let i =0;i<a.length;i++) {
		if(counts[a[i] - 'a']) {
			counts[a[i]]++;
			counts[b[i] - 'a']--;
		}
		else {
			counts[a[i]] = 1;
			counts[b[i] - 'a']--;
		}
	}
	
	for(let i of counts) {
		if(i === 0) {
			return false;
		}
	}
	return true;
}

let res = solve('anagram', 'naagram');
console.log(res);
