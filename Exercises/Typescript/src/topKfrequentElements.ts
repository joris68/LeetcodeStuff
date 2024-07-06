function topKFrequent(nums: number[], k: number): number[] {
    let hash : {[key: number]: number} = {};

    nums.forEach((item, index) => {
        if(item in hash){
            hash[item] += 1;
        }
        hash[item] = 1;
    })

    

    return Object.keys(hash).map(k => +k);

};