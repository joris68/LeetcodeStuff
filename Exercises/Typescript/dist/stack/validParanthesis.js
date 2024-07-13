"use strict";
function isValid(s) {
    let hash = createHash();
    let tempStore;
    for (let i = 0; i < s.length; i++) {
        if (!tempStore) {
            tempStore = hash.get(s[i]);
            continue;
        }
        if (tempStore !== s[i])
            return false;
        tempStore = s[i + 1];
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
