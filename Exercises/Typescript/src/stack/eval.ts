function evalRPN(tokens: string[]): number {

    let termStack : number[] = [];
    let operands = createOperands();


    for (let i = 0; i < tokens.length; i++){

        //console.log(`Stack before: ${termStack}`);

        let ele;
        if(tokens[i] in operands){
            ele  = tokens[i];
            let first: number = termStack.pop()!;
            let second : number = termStack.pop()!;
            switch (ele) {
                case "+":
                    termStack.push(second  + first);
                    break;
                case "-":
                    termStack.push(second - first);
                    break;
                case "*":
                    termStack.push(second * first);
                    break;
                case "/":
                    termStack.push(Math.trunc(second / first));
                    break;
            }

            //console.log(`Stack after Operation: ${termStack}`);

        }else{
             ele  = Number(tokens[i]);
             termStack.push(ele);
            // console.log(`Stack after pushing: ${termStack}`);
        }
    }

    // should return the last element
    return termStack.pop()!

};

function createOperands (): {[key : string]: string} {
    let operands = {
        "+": "+",
        "-": "-",
        "*": "*",
        "/": "/"
    }
    return operands;
}

//let test123 : string [] = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

//evalRPN(test123);