/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((prev,curr) => prev+curr);
    var calsums = 0;
    var count = 0;
    for (let i = 0; i < A.length; i++){
        calsums+=A[i];
        if(calsums === sum/3){
            calsums = 0;
            count++;
        }
        if (count == 3){
            return true;
        }
    }
    return false;
};