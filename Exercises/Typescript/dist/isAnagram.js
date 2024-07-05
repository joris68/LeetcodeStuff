"use strict";
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    let mapS = new Map();
    let mapT = new Map();
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (mapS.has(curr)) {
            let temp = mapS.get(curr);
            mapS.set(s[i], temp + 1);
        }
        else {
            mapS.set(curr, 1);
        }
        if (mapT.has(curr)) {
            let temp = mapS.get(curr);
            mapT.set(s[i], temp + 1);
        }
        else {
            mapT.set(curr, 1);
        }
    }
    for (let entry of mapS.entries()) {
        if (!mapT.has(entry[0]))
            return false;
        if (!(entry[1] === mapT.get(entry[0])))
            return false;
    }
    return true;
}
;
