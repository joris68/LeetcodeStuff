"use strict";
function minEatingSpeed(piles, h) {
    // 1. get max from piles
    // 2. create a range 
    // 3. with binary search search through the range
    const maxPile = Math.max(...piles);
    const possRange = [];
    for (let i = 1; i <= maxPile; i++) {
        possRange.push(i);
    }
    // starting with binary search
    let left = 0;
    let right = possRange.length - 1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
    }
}
;
try { }
finally { }
number, h;
number;
number;
{
    let totalCoins = 0;
    for (let i = 0; i < piles.length; i++) {
        totalCoins += Math.ceil(pileSizes[i] / 2);
    }
    if (totalCoins === h) {
        return 0;
    }
    else if (totalCoins < h) {
        return -1;
    }
    else {
        return 1;
    }
}
;
