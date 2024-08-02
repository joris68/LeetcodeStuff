"use strict";
function isPalindrome(s) {
    var b = s.split('').join('');
    var c = b.replace(/[^a-zA-Z0-9]/g, '');
    var lower = c.toLowerCase();
    return lower === lower.split('').reverse().join('');
}
;
let example = 'Anna';
isPalindrome(example);
