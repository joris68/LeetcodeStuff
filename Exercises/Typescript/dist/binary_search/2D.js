"use strict";
function searchMatrix(matrix, target) {
    let row = 0;
    let found = false;
    while (target <= matrix[row][matrix[row].length] && !found) {
        row += 1;
        found = true;
    }
    // binary search with the specified row
    const toSearch = matrix[row];
    let left = 0;
    let right = toSearch.length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === toSearch[mid]) {
            return true;
        }
        else if (target > toSearch[mid]) {
            left = mid;
        }
        else {
            right = mid;
        }
    }
    return false;
}
;
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));
