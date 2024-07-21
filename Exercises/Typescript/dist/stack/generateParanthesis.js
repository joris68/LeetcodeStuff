"use strict";
function generateParenthesis(n) {
    let result = [];
    let initialStartString = '(';
    return backtracking(initialStartString, n, n, 1, 0, result);
}
;
function backtracking(startString, openLimit, closedLimit, openCounter, closedCounter, result) {
    if (closedCounter < openCounter && closedCounter < closedLimit && openCounter < openLimit) {
        let rand = Math.random();
        if (rand >= 0.5) {
            startString += "(";
            backtracking(startString, openLimit, closedLimit, openCounter + 1, closedCounter, result);
        }
        else {
            startString += ")";
            backtracking(startString, openLimit, closedLimit, openCounter, closedCounter + 1, result);
        }
    }
    else if (closedCounter === openCounter && closedCounter < closedLimit && openCounter < openLimit) {
        // just add a 
        startString += "(";
        backtracking(startString, openLimit, closedLimit, openCounter + 1, closedCounter, result);
    }
    else {
        // here we are at a leaf ==> add to result array
        result.push(startString);
    }
    return result;
}
console.log(generateParenthesis(3));
