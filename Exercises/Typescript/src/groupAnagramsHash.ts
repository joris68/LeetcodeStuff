

function groupAnagramshash(strs: string[]): string[][] {

    // intialize obejct as Hashtable
    let hash : {[key: string]: string[]} = {};

    strs.forEach((item, index) => {
        let found : boolean = false;

        hash.keys.forEach(element => {
            if(checkAnagram2(item, element)){
                hash[element].push(item);
                found = true;
            }
        });

        if(!found){
            hash[item] = [item];
        }
    })

    return [...Object.keys(hash).map(k => hash[k])];

}



function checkAnagram2(s: string, t: string) {
    if (s.length !== t.length) return false;

    let first: Array<string | null> = s.split('');
    const second = t.split('');

    for (let i = 0; i < second.length; i++) {
        const element = second[i];

        let found = first.indexOf(element);

        if (found !== -1) {
            first[found] = null;
        } else {
            return false;
        }
    }

    return true;
}