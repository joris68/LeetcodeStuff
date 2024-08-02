"use strict";
// twp pointer is about how do I shift the pointers?
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        let area = Math.min(height[left], height[right]) * Math.abs(left - right);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right])
            left += 1;
        else
            right -= 1;
    }
    return maxArea;
}
;
function maxAreaBrute(height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let minHeight = Math.min(height[i], height[j]);
            const abstand = Math.abs(i - j);
            const area = abstand * minHeight;
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}
