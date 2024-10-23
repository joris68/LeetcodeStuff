class Node {
    contructor(key?: number , value?: number, prev? : Node | null, next? : Node | null){
        self.key = key;
        self.value = value;
        self.prev = null;
        sefl.next = null;
    }
}


class LRUCache {
    private cache;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = {};
        this.left = Node(0,0);
        this.right = Node(0,0);
        // connet dooubly linked lists
        // left is least recently used
        // right = most recent
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node: Node) {

    }
    // insert at right
    insert(node: No)

    get(key: number): number {
        if (key in Object.keys(this.cache)){
            // update most recent
            return this.cache[key].value;
        } else{
            return -1;
        }
    }

    put(key: number, value: number): void {
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */