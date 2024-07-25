"use strict";
function isPalindrome(s) {
    var b = s.split('').join('');
    var c = b.replace(/[^a-z0-9]/gi, '');
    var d = c.toLowerCase();
    let lower = s.toLowerCase();
    return lower === lower.split('').reverse().join('');
}
;
let example = 'Anna';
isPalindrome(example);
