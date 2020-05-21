/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let num = 0
    for(let i = 0; i < points.length - 1; i++){
      let x1 = points[i][0]
      let y1 = points[i][1]
      let x2 = points[i+1][0]
      let y2 = points[i+1][1]
      let x = Math.abs(x2 - x1)
      let y = Math.abs(y2 - y1)
      if (x - y === 0 ) {
        num += x
      } else if (x < y) {
        num += y
      } else if (x > y) {
        num += x
      }
    }
    return num
};
