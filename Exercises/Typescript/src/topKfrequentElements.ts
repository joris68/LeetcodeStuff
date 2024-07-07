function topKFrequent(nums: number[], k: number): number[] {
    let hash : {[key: number]: number} = {};

    nums.forEach((item, index) => {
        hash[item] = (hash[item] || 0) + 1;
    })

    console.log(hash);

    let sorted : Array<[string, number]>  = Object.entries(hash).sort((a,b) => b[1] - a[1]);
    console.log(sorted);
    let sliced : Array<[string, number]> = sorted.slice(0, k);

    return sliced.map(x => +x[0]);

};

let nums : Array<number> = [1,1,1,2,2,3];

console.log(topKFrequent(nums, 2));