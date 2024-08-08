function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length -1;
    let result = nums[0];
    while ( left <= right){
        if(nums[left] <= nums[right]){
            // meaning that it is already sorted (not rotated)
            result = Math.min(result, nums[left]);
            break;
        }

        const mid = Math.floor((left + right) /2);
        if(nums[mid] >= nums[right]){
            // search left
            left = mid +1;
        }else{
            // search right
            right = mid -1;
        }
    }
    return result;
};