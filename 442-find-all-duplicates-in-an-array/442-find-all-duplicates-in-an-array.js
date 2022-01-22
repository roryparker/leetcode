/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//     let set = new Set(nums);
    
//     nums.forEach (i => {
//         if (set.has(i)) {
//             set.delete(i);
//         } else {
//             set.add(i);
//         }
//     })
//     return Array.from(set);
// };

// var findDuplicates = function(nums) {
//     let storage = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         if (storage.has(nums[i])) {
//             storage.add(nums[i])
//         }
//     }return storage
// };

// var findDuplicates = function(nums) {
//     let storage = [];
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] - 1 > 0) nums[i] - 1 = -nums[i] - 1
//         else { 
//             storage.push(nums[i])
//         }
//     }
    
//     return storage;
// };

// var findDuplicates = function(nums) {
//     let storage = [];
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 storage.push(nums[i]);
//             }
//         }
//     }
    
//     return storage;

// };

function findDuplicates(nums) {

  const duplicates = [];
  const seen = {};

  for (const item of nums) {
    if (!seen[item]) {
      seen[item] = 'found'
    } else {
      duplicates.push(item)
    }
  }

  return duplicates
}

