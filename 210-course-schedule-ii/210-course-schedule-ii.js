/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = Array(numCourses).fill(0).map(() => []);
    const inDegree = Array(numCourses).fill(0);
    
    for(let i = 0; i < prerequisites.length; i++) {
        const source = prerequisites[i][1];
        const target = prerequisites[i][0];
        
        graph[source].push(target);
        inDegree[target] = inDegree[target] + 1;
    }
    
    const sources = [];
    
    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) {
            sources.push(i);
        }
    }
    
    const queue = [];
    const sortedOrder = [];
    
    while(sources.length > 0) {
        const source = sources.shift();
        sortedOrder.push(source);
        
        graph[source].forEach((node) => {
            inDegree[node] = inDegree[node] - 1;
            if(inDegree[node] === 0) {
                sources.push(node);
            }
        });
    }
    
    if(sortedOrder.length !== numCourses) {
        return [];
    }
    
    return sortedOrder;
};
