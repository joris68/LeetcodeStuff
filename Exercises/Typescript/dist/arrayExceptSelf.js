"use strict";
function productExceptSelf(nums) {
    const array = [];
    let product = 1;
    for (let idx = 0; idx < nums.length; idx++) {
        console.log("Array beginning:" + array);
        console.log("Product beginning" + product);
        array[idx] = product;
        product *= nums[idx];
        console.log("Array end: " + array);
        console.log("Product end: " + product);
    }
    console.log("End of first loop array : " + array);
    console.log("End of second loop product: " + product);
    product = 1;
    for (let idx = nums.length - 1; idx >= 0; idx--) {
        console.log("Array beginning:" + array);
        console.log("Product beginning" + product);
        array[idx] *= product;
        product *= nums[idx];
        console.log("Array end :" + array);
        console.log("Product end" + product);
    }
    return array;
}
let test = [1, 2, 3, 4];
let test2 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(test));
//console.log(productExceptSelf(test2));
