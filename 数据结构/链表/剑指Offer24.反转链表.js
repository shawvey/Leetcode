var reverseList = function(head) {
    var prev = null, cur = head, temp;
    while(cur){
        temp = cur.next;
        cur.next = prev; 
        prev = cur; 
        cur = temp;
    }
    return prev;
};