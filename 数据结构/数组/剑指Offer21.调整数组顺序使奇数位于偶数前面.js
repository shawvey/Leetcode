var exchange = function(nums) {
    const odd = []; 
    const even = []; 
    nums.forEach(item => {
        item % 2 == 1 ? odd.push(item) : even.push(item);
    });
    return odd.concat(even);
};