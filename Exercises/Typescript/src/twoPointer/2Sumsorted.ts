function twoSum(numbers: number[], target: number): number[] {
    
    let left = 0;
    let right = numbers.length -1;
    const result = [];

    while (left < right ) {
        
        const sum = numbers[left] + numbers[right];

        if(sum < target) {
            left += 1;
        } else if(sum > target) {
            right -= 1;
        } else{
            result.push(left+1);
            result.push(right +1);
            break;
        }


    }

    return result;
};