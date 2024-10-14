function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const DummyHead = new ListNode();
    let tail = DummyHead;
    let curr1 = list1;
    let curr2 = list2;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val > curr2.val) {
            tail.next = curr2;
            curr2 = curr2.next;
        }else{
            tail.next = curr1;
            curr1 = curr1.next;
        }
        tail = tail.next;

    }

    if(curr1 === null){
        tail.next = curr2;
    }else{
        tail.next = curr1;
    }

    return DummyHead.next

};