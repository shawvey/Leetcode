/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let res = ''
    for(let i=0; i<str.length; i++){
        res += str[i]<'a' && str[i] >= 'A' ? String.fromCharCode(str[i].charCodeAt()+32) : str[i]
    }
    return res
};
