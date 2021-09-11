/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     while(n){
//         nums1[m++]=nums2[--n];
//     }
//     nums1.sort(function(val1, val2){
//         return val1>val2?1:val1<val2?-1:0;
//     })
// };

// var merge = function(nums1, m, nums2, n) {
//     nums1 = nums1.splice(3, 3).concat(nums2).sort()
// };

// var merge = function(nums1, m, nums2, n) {
//     const result = nums1.concat(nums2);
//     const newresult = result.filter((item, pos) => result.indexOf(item) === pos)
//     return newresult.sort(array.sort(comparefunction));
// };

// var merge = function(nums1, m, nums2, n) {
//     nums1 = nums1.splice(3, 3).concat(nums2).sort(function(val1, val2){
//         return val1>val2?1:val1<val2?-1:0;
//     });
// };

var merge = function(nums1, m, nums2, n) {
    var x = 0
    var index = 0
    while(index - x < m && x < n){
        if(nums2[x] < nums1[index]){
            nums1.splice(index, 0, nums2[x])
            nums1.pop()
            x++
        }
        index++
    }
    if(x < n)
        nums1.splice(index, nums2.slice(x).length, ...nums2.slice(x))
    
};