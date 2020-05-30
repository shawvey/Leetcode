/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    const string = astr.split('')
    for(let i = 0; i < string.length; i++){
        for(let j = i+1; j < string.length; j++ ){
            if(string[i]==string[j]){
                return false  
                break
            }
        }   
    }
    return true
};
