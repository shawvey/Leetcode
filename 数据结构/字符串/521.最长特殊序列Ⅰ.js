var findLUSlength = function(a, b) {
    if(a === b)
        return -1;
    return a.length > b.length ? a.length : b.length;
};