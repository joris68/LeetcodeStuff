function hasCycle(head: ListNode | null): boolean {
    const mySet  = new Set();
    let curr = head;
    while(curr !== null) {
        if(mySet.has(curr)){
            return true;
        }else{
            mySet.add(curr);
            curr = curr.next;
        }
    }
    return false;
};