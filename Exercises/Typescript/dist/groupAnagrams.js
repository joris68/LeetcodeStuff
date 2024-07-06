"use strict";
function groupAnagrams(strs) {
    if (strs.length === 0)
        return [[""]];
    if (strs.length === 1)
        return [[strs[0]]];
    let result = [];
    ;
    for (let i = 0; i < strs.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (checkAnagram(result[j][0], strs[i])) {
                result[j].push(strs[i]);
                found = true;
                break;
            }
        }
        if (!found)
            result.push([strs[i]]);
    }
    return result;
}
;
function checkAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    let first = s.split("");
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
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
