"use strict";
function generateParenthesis(n) {
    let stack = [];
    let result = [];
    function backtracking(openC, closedC) {
        if (openC === n && closedC === n) {
            result.push(stack.join(''));
            return;
        }
        if (openC < n) {
            // add opening paranthesis
            stack.push("(");
            backtracking(openC + 1, closedC);
            stack.pop();
        }
        if (closedC < openC) {
            stack.push(")");
            backtracking(openC, closedC + 1);
            stack.pop();
        }
    }
    backtracking(0, 0);
    return result;
}
;
