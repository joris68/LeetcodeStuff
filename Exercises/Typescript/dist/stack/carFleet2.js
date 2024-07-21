"use strict";
function carFleet(target, position, speed) {
    let stack = zipCars(position, speed);
    for (let i = 0; i < position.length; i++) {
        let car1 = stack.pop();
        let car2 = stack.pop();
        if (car1 && car2) {
        }
    }
    return 5;
}
;
function zipCars(position, speed) {
    let zipped = position.map((ele, index) => [ele, speed[index]]);
    let sorted = zipped.sort((a, b) => b[0] - a[0]);
    console.log(sorted);
    return sorted;
}
// Tuple structure: (positon, speed)
function catchUp(car, car2, target) {
    if (car[1] > car2[1]) {
        let left = target - car2[0];
        let some = left * car[1];
        if (some >= car2[0])
            return true;
        return false;
    }
    else {
        return false;
    }
}
