var countCharacters = function(words, chars) {
    let sum = 0
    for(let i=0 ; i<words.length; i++){
        const w = words[i]
        let s = chars, flag = true, j = 0
        while( j < w.length ){
            if( s.indexOf(w[j]) === -1 ){ //indexof返回某个字符出现的位置，没出现就返回-1
                flag = false
                break
            }
            s = s.replace(w[j],'') //用完后替换为空，因为要求字母只能在一个词汇中用一次
            j++
        }
        if(flag) sum += w.length
    }
    return sum
};