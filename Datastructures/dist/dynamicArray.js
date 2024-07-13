"use strict";
class DynamicArray {
    constructor(given_capacity) {
        this.capacity = given_capacity;
        this.size = 0;
        this.store = new Array(given_capacity).fill(undefined);
    }
    get(i) {
        return this.store[i];
    }
    set(i, n) {
        this.store[i] = n;
    }
    // Average case O(1) complexity, when resizing O(n)
    pushback(n) {
        if (this.size < this.capacity) {
            this.store[this.size] = n;
            this.size += 1;
        }
        else {
            this.resize();
        }
    }
    popback() {
        this.size -= 1;
        return this.store[this.size];
    }
    // O(n) complexity
    resize() {
        this.capacity *= 2;
        let newArray = new Array(this.capacity).fill(undefined);
        for (let i = 0; i < this.store.length; i++) {
            newArray[i] = this.store[i];
        }
        this.store = newArray;
    }
    // O(1)
    getSize() {
        return this.size;
    }
    // O(1)
    getCapacity() {
        return this.capacity;
    }
}
