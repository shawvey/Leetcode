var balancedStringSplit = function(s) {
    var count = 0;
    var result = 0;
    for (var i = 0; i <= s.length; i++){
        count += s[i] === 'R' ? 1 : -1;
        if (count === 0) {
            result++;
        }
    }
    return result;
};