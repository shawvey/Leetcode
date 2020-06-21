var reversePrint = function(head) {
    const res = []
    while(head !== null){
        res.unshift(head.val)
        head = head.next
    }
    return res
};