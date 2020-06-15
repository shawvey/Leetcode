var isPrefixOfWord = function(sentence, searchWord) {
    let result=sentence.split(" ");
    let i=0, num=0;
    while(i<result.length)
    {
        if(result[i].startsWith(searchWord)){
            return i+1;
        }
        i++
    }
    return -1;
};