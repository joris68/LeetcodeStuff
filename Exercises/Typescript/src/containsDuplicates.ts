function containsDuplicate(nums: number[]): boolean {
    let temp = new Set();

    for (let i =0;  i < nums.length ; i++) {
        if (temp.has(nums[i])) {
            return true;
        }
        temp.add(nums[i]);

    }
    return false;
};