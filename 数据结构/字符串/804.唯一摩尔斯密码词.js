var uniqueMorseRepresentations = function (words) {
    let ans = []
    let arr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    words.forEach(word => {
        let str = ''
        for (let c of word) {
            let i = c.charCodeAt() - 97
            str += arr[i]
        }
        ans.push(str)
    })
    return new Set(ans).size
};
