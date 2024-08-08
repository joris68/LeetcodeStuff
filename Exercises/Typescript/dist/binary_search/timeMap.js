"use strict";
class TimeMap {
    constructor() {
        this.store = {};
    }
    set(key, value, timestamp) {
        if (key in this.store) {
            // insertion linear
            let counter = 0;
            while (timestamp > this.store[counter][1])
                counter++;
            this.store[key].splice(counter, 0, [value, timestamp]);
        }
        else {
            this.store[key] = [[value, timestamp]];
        }
    }
    get(key, timestamp) {
        if (!(key in this.store)) {
            return "";
        }
        // retrieval through binary search
        let left = 0;
        let right = this.store[key].length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            // retrieve timestamp
            let ele = this.store[key][mid][1];
            if (ele === timestamp) {
                return this.store[key][mid][0];
            }
            else if (ele < timestamp) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return this.store[key][this.store[key].length - 1][0];
    }
}
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */ 
