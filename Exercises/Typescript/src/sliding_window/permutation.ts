function checkInclusion(s1: string, s2: string): boolean {
    let result = false;
    let left = 0;
    let right = s1.length -1;

    const permMap = makeMap(s1);

    while (right < s2.length) {
        const subS = s2.substring(left, right);
        const found = checkSubstring(subS, permMap);
        if(found){
            result = true;
            break;
        }else{
            left += 1;
            right += 1;
        }
    }

    return result;
    
};

function checkSubstring(subS: string, permMap: { [key: string]: number }) : boolean{
    const compareMap = makeMap(subS);
    // compare keys 
    const cKeys = Object.keys(compareMap).sort();
    const pKeys = Object.keys(permMap).sort();

    if(JSON.stringify(cKeys) !== JSON.stringify(pKeys)){
        return false;
    }
    const cVals = Object.values(compareMap);
    const pVals = Object.values(pKeys);
    if(JSON.stringify(cVals) !== JSON.stringify(pVals)){
        return false;
    }

    return true;
}

function makeMap(s1 : string) : { [key: string]: number } {

    const perm : { [key: string]: number } = {};

    for (let i = 0; i < s1.length; i++){
        const curr = s1[i];
        if(curr in perm ) {
            perm[curr] += 1;
        } else{
            perm[curr] = 1;
        }
    }
    return perm;
}   