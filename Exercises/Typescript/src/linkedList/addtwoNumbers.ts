function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let currL1 = l1;
    let currL2 = l1 ;
    let carry = 0;

    const dummy = new ListNode();
    let currNew = dummy;

    while(currL1 !== null || currL2 !== null || carry !== 0) {
        let val1  = currL1 === null ? 0 : currL1.val;
        let val2 = currL2 === null ? 0 : currL2.val;


        let sum = val1 + val2 + carry;
        const value: number = sum % 10;
        carry = Math.floor(sum / 10);
        currNew.next = new ListNode(value);

        // update the pointers
        currNew = currNew.next;
        currL1 = currL1 !== null ? currL1.next : null;
        currL2 = currL2 !== null ? currL2.next : null;

    }

    return dummy.next;
};


