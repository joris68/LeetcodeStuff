"use strict";
console.log(process.argv);
function add(nums) {
    let acc = 0;
    for (let i = 2; i < nums.length; i++) {
        acc += Number(nums[i]);
    }
    return acc;
}
let res = add(process.argv);
process.stdout.write(res.toString());
