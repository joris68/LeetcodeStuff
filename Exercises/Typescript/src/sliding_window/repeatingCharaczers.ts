function characterReplacement(s: string, k: number): number {
    const count :{ [key: string]: number } = {};
    let result = 0;
    let left = 0;
    let right = 0;

    while (right < s.length){
        // update 
        const currChar : string = s[right];
        if(currChar in count){
            count[currChar] += 1;
        }else{
            count[currChar] = 1;
        }
        const mostFrequent = getMostFrequentElement(count);
        const isValid = isValidWindow((right -left),  mostFrequent, k);
        if(isValid){
            right += 1;
        }else {
            count[s[left]] -= 1;
            if(count[s[left]] === 0) delete count[s[left]];
            left += 1;
        }
        result = Math.max(result, right - left);
    }
    return result;
};

function getMostFrequentElement(countMap: { [key: string]: number }): number{
    const vals = Object.values(countMap);
    console.log(vals);
    vals.sort(); 
    vals.reverse();
    return vals[0];
};

function isValidWindow(windowlength :number, mostFrequent: number, k : number) : boolean {
    return (windowlength - mostFrequent) <= k;
};