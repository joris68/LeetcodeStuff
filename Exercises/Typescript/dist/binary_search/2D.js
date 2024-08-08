"use strict";
function searchMatrix(matrix, target) {
    // binary search for 2D matrix
    let first = 0;
    let second = matrix.length;
    let row = undefined;
    while (first < second) {
        let mid = Math.floor((first + second) / 2);
        if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
            row = mid;
        }
        else if (target >= matrix[mid][matrix[mid].length - 1]) {
            first = mid + 1;
        }
        else {
            second = mid - 1;
        }
    }
    if (!row) {
        return false;
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
