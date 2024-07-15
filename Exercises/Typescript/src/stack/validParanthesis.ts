function isValid(s: string): boolean {

    // the case where they are not valid
    if(s.length % 2 !== 0) return false;

    const map_counterpart = {
        '}': '{',
        ')' : '(',
        ']': '['
    }

    let stack : string[] = [];
    let chars : string [] = s.split('');

    for (let i = 0; i < chars.length ; i++){
        let element = chars[i];
        if (element in map_counterpart) {
            let pop = stack.pop();

            if(pop === map_counterpart[element]){
                continue;
            }else{
                return false;
            }
        }else{
            stack.push(element)
        }

    }

    if (stack.length > 0) return false;

    return true;
    
};
