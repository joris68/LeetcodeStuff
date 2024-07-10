"use strict";
function isValidSudoku(board) {
    let indexKeeper = {};
    let quadrantKeeper = {};
    board.forEach((item, index) => {
        item.forEach((innerItem, innerIndex) => {
            if (innerItem !== '.') {
                if (!indexKeeping(innerIndex, indexKeeper))
                    return false;
                if (!quadrantKeeping([index, innerIndex], +innerItem, quadrantKeeper))
                    return false;
            }
        });
    });
    console.log("indexkeeper: " + JSON.stringify(indexKeeper));
    console.log("quadrantkeeper: " + JSON.stringify(quadrantKeeper));
    return true;
}
;
function quadrantKeeping(indexTupel, item, quadrants) {
    let quadrant = mapToQuadrants(indexTupel);
    console.log(`tuple: ${indexTupel} and quadrant: ${quadrant}`);
    if (quadrant in quadrants) {
        if (quadrants[quadrant].filter(x => x === item).length === 0) {
            quadrants[quadrant].push(item);
            return true;
        }
        else {
            return false;
        }
    }
    else {
        quadrants[quadrant] = [item];
        return true;
    }
}
function indexKeeping(item, map) {
    let modes = ['row', 'col'];
    for (let mode in modes) {
        let key = `${item}${mode}`;
        console.log("key: " + key);
        if (key in map) {
            if (map[key].filter(x => x === item).length === 0) {
                map.key.push(item);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            map[key] = [item];
            return true;
        }
    }
    return true;
}
function mapToQuadrants(tuple) {
    if (tuple[0] <= 2 && tuple[1] <= 2)
        return 0;
    if (tuple[0] <= 2 && tuple[1] <= 5)
        return 1;
    if (tuple[0] <= 2 && tuple[1] <= 8)
        return 2;
    if (tuple[0] <= 5 && tuple[1] <= 2)
        return 3;
    if (tuple[0] <= 5 && tuple[1] <= 5)
        return 4;
    if (tuple[0] <= 5 && tuple[1] <= 8)
        return 5;
    if (tuple[0] <= 8 && tuple[1] <= 2)
        return 6;
    if (tuple[0] <= 8 && tuple[1] <= 5)
        return 7;
    if (tuple[0] <= 8 && tuple[1] <= 8)
        return 8;
    return -1;
}
let test1 = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(test1));
