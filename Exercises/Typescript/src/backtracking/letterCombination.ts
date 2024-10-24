
const mapper = {
     2 : ["a","b","c"],
     3 : ["d","e","f"],
     4 : ["g", "h", "i"],
     5 : ["j", "k", "l"],
     6 : ["m", "n", "o"],
     7: ["p", "q", "r", "s"],
     8 : ["t", "u", "v"],
     9 : ["w", "x", "y", "z"]
 
 };
 
 function letterCombinations(digits: string): string[] {
     if(digits.length === 0){
         return [];
     }
     const result : string [] = [];
 
     function recursion(index : number, store : string){
         if(index === digits.length){
             result.push(JSON.parse(JSON.stringify(store)));
             return;
         }
 
         const combs : string[] = mapper[digits[index]];
         for(let x = 0; x < combs.length; x++){
             store += combs[x];
             recursion(index +1, store);
             store = store.slice(0, -1);
         }
 
     };
 
     recursion(0, "");
     return result;
 
 };