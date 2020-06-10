var destCity = function(paths) {
    let start = [],end =[]
    paths.forEach(i => {
        start.push(i[0])
        end.push(i[1])
    })
    return end.filter(item => !start.includes(item)).join('')
};