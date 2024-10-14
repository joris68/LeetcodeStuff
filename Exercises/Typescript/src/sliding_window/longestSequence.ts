
// my solution
function lengthOfLongestSubstringMine(s: string): number {
    // edge case one
    if(s.length === 1) {
        return 1;
    }

    let set = new Set();
    let runner = 0;
    let result = 1;

    while (runner < s.length){
        let curr = s.charAt(runner);
        if(set.has(curr)){
            // update result
            result = Math.max(result, set.size);
            // clear set
            set.clear();

        } else{
            // add to set
            set.add(curr);
        }
        runner += 1;
    }

    return result;
};

// correct solution
function lengthOfLongestSubstring(s:string): number {

    const set = new Set();
    let left = 0;
    let result = 0;

    for(let i = 0; i < s.length; i++){
        let char_runner = s.charAt(i);
        while (set.has(char_runner)){
            set.delete(s.charAt(left));
            left += 1;
        }
        set.add(char_runner);
        result  = Math.max(result, set.size);

    }
    return result;
}

