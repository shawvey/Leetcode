/**
 * @param {number[]} A
 * @return {boolean[]}
 */

var prefixesDivBy5 = function(A) {
    var result= [];
    var sum = 0;
    for(let i = 0; i < A.length; i++){
        sum = sum*2 + A[i];
        sum = sum % 5;
        if (sum == 0) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};