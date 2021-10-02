/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
   if (rowIndex === 0) {return [1]}
    
   const priorRow = getRow(rowIndex - 1)
   const answer = [1]
   
   for (let i = 1; i < rowIndex + 1 - 1; i++) {
       answer.push(priorRow[i - 1] + priorRow[i])
   }
   answer.push(1)
   return answer;
};