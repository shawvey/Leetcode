var freqAlphabets = function(s) {
    var arr = [];
    for(var i = 1; i <= 26; i++) {
        arr.push(i > 9 ? `${i}#` : `${i}`);
    }
    for(var j = 25; j >= 0; j--) {
        s = s.replace(new RegExp(arr[j], 'g'), String.fromCharCode(j + 97))
    }
    return s;
};