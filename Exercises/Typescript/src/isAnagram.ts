function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length) return false;

    let mapS = new Map<string, number>();
    let mapT = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        let curr: string = s[i];
        if(mapS.has(curr)) {
            let temp: number =  mapS.get(curr)!;
            mapS.set(s[i], temp +1 );
        } else{
            mapS.set(curr, 1);
        }

        if(mapT.has(curr)) {
            let temp: number =  mapS.get(curr)!;
            mapT.set(s[i], temp +1 );
        } else{
            mapT.set(curr, 1);
        }
    }
    
    for (let entry of mapS.entries()){
        if(!mapT.has(entry[0])) return false;
        if(!(entry[1]=== mapT.get(entry[0]))) return false;
    }

    return true;
};