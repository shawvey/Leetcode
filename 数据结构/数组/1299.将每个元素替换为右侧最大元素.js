/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let maxvalue = -1
    let result = []
    for(let i = arr.length-1; i>=0; i--){
        result[i] = maxvalue
        if(maxvalue <= arr[i]){
            maxvalue=arr[i]
        }
    }
    return result
};