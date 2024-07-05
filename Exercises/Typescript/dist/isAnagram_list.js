"use strict";
function isAnagram_list(s, t) {
    if (s.length !== t.length)
        return false;
    let first = s.split('');
    const second = t.split('');
    for (let i = 0; i < second.length; i++) {
        const element = second[i];
        let found = first.indexOf(element);
        if (found !== -1) {
            first[found] = null;
        }
        else {
            return false;
        }
    }
    return true;
}
const first = "hallo";
const second = "alloh";
console.log(isAnagram_list(first, second));
