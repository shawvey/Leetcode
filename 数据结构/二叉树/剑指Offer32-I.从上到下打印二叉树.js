var levelOrder = function(root) {
    if(!root) 
        return [];
    const queue=[root];
    let res=[];
    while(queue.length){
       let t=queue.shift(); //删除数组第一个元素并返回该元素
       res.push(t.val);
       if(t.left) queue.push(t.left);
       if(t.right) queue.push(t.right);
   }
   return res;
};