/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
var x = nums1.concat(nums2).sort((a,b) => a-b);
return x.length % 2 === 1 ? x[x.length / 2 - 0.5] : (x[x.length / 2-1] + x[x.length / 2]) / 2;
};