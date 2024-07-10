function longestConsecutiveSequence(nums: number[]): number {

    let [hash, smallest] = fillHashMap(nums);
    
    let counter = 0;
    let result = 0;
    for (let i = smallest; i < (smallest + nums.length); i++){
        if(i in hash) counter++;
        else {
            // set counter back and try again
            if(counter > result){
                result = counter;
            }
            counter = 0;
        }
        //console.log(`i: ${i} couter: ${counter}`);
    }
    return result;

};

function fillHashMap(nums: number[]): [{ [key: number]: number }, number ] {
    let hash:  {[key : number]: number} = {};
    let smallest:number =  nums[0];
    let inputlength = nums.length;

    for (let i = 0; i < inputlength; i++){
        if(nums[i] in hash){
            hash[nums[i]] += 1;
        } else{
            hash[nums[i]] = 1;
        }
        if(nums[i] <= smallest) smallest = nums[i];
        //console.log(smallest);
    }

    return [hash, smallest];
}

let  test5 : number [] = [100,4,200,1,3,2];

//[0,3,7,2,5,8,4,6,0,1]

console.log(longestConsecutive(test5));