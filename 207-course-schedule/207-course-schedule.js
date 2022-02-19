/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {    
    let numPre = {}; 
    let prereqMap = {};
    
    for(let i = 0; i < numCourses; i++){
        numPre[i] = 0;
        prereqMap[i] = [];
    }

    for(let i = 0; i < prerequisites.length; i++){
        let pre = prerequisites[i][1];
        let course = prerequisites[i][0];
        prereqMap[pre].push(course);
        numPre[course]++;
    }
    
    let courseQue = [];
    
    for(let i =0; i < numCourses; i++){
        if(numPre[i] === 0) courseQue.push(i);
    }
    
    let orderCourse = [];
    while(courseQue.length > 0){
        let preDone = courseQue.pop();
        orderCourse.push(preDone); 
        let courses = prereqMap[preDone];
        
        for(let i =0; i < courses.length; i++){
            numPre[courses[i]]--;
            if(numPre[courses[i]] === 0) courseQue.push(courses[i]); 
        }
    }
    
    if(orderCourse.length < numCourses) return false; 
    else return true; 
};