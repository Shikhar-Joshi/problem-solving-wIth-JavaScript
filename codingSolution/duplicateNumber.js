function hasDuplicate(nums) {
    // to stop breaking
    if(nums.length > 1) {    
        let slow, fast;
        slow = fast = nums[0];
        do{
            slow = nums[slow];
            fast = nums[nums[fast]];
        }while(slow !== fast);

        fast = nums[0];
        while(fast !== slow) {
            fast = nums[fast];
            slow = nums[slow]
        }
        return fast;
    }
    return -1;
}

let nums = [1,3,3,4,2];
console.log(hasDuplicate(nums));
