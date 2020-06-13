var CheckPermutation = function(s1, s2) {
    return s1.split('').sort().toString()===s2.split('').sort().toString();
};