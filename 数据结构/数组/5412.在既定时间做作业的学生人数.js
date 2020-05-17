/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    count = 0
    for (let i = 0;i<startTime.length;i++){
        if((startTime[i]<=queryTime) && (endTime[i]>=queryTime)){
            count+=1
        }
    }
    return count
};