function isAnagram_improved(s: string, t: string): boolean {

    if (s.length !== t.length) return false;

    let mapS = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        let curr: string = s[i];
        if (mapS.has(curr)) {
            mapS.set(curr, mapS.get(curr)! + 1);
        } else {
            mapS.set(curr, 1);
        }
    }

    let mapT = new Map<string, number>();

    for (let i = 0; i < t.length; i++) {
        let curr: string = t[i];
        if (mapT.has(curr)) {
            mapT.set(curr, mapT.get(curr)! + 1);
        } else {
            if (mapS.has(curr)) {
                mapT.set(curr, 1);
            } else {
                return false;
            }
        }
    }

    for (let entry of mapS.entries()) {
        if (!mapT.has(entry[0])) return false;
        if (!(entry[1] === mapT.get(entry[0]))) return false;
    }

    return true;
};
