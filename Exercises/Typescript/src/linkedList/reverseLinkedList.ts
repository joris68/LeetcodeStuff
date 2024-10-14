
 
class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
    }
 }
 

// interatively

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;
    let temp;
    while (curr  !== null) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return curr;
}




// recursively
function reverseList2(head: ListNode | null): ListNode | null {
    return recursively(null, head)
}

function recursively(prev : ListNode | null, curr : ListNode | null): ListNode | null {
    if(curr === null){
        return prev;
    }
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    return recursively(prev, curr);
}   

