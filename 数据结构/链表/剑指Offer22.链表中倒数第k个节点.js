var getKthFromEnd = function(head, k) {
    let p = head;
    let q = head;
    let i = 0;
    while (p) {
        if (i >= k) {
            q = q.next;
        }
        p = p.next;
        i++;
    }
    return q;
};
/* p多走的其实就是q要余下来的个数 */