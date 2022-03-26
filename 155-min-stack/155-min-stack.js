
var MinStack = function() {
    this.stack = []; //create the stack
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]; // get end of array object
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[0]; // the first element in the array
    
    for (let i = 1; i < this.stack.length; i++) {        // Loop over the array starting at the first element
        if ( min > this.stack[i] ) {
            min = this.stack[i]           // if the first element of the array is greater than each element in the array being checked, the minimum number changes.
        } 
    }
    
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */