"use strict";
function isValid(s) {
    let hash = createHash();
    let tempStore;
    for (let char of s) {
        if (!tempStore) {
            tempStore = hash.get(char);
            continue;
        }
        if (tempStore !== char)
            return false;
        tempStore = char;
    }
    return true;
}
;
function createHash() {
    let map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
    return map;
}
let test8 = "()[]{}";
console.log(isValid(test8));
