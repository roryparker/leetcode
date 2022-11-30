/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    // Create variables for solution
    let result = 0;
    
    // Sort the students and seats early on
    seats.sort((a,b) => a - b);
    students.sort((a,b) => a - b);
    
    // Loop over the seats
    for (let i = 0; i < seats.length; i++) {
        result += Math.abs(seats[i] - students[i]);
    }
    
    return result;

};