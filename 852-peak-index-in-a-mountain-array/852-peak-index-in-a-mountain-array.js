/**
 * @param {number[]} arr
 * @return {number}
 */
// var peakIndexInMountainArray = function(arr) {
    
//     for (let i = 0; i < arr.length; i++) {
//       let firstElement = 0, lastElement = arr.length -1, Middle = firstElement + (lastElement - firstElement) / 2
      
//       if (arr[i] >= arr[0] || arr[i] > arr[1] || arr[i] > arr[i - 1] ) {
//           console.log(arr[i])
//           return arr[i]
//       }
//     }
// };

var peakIndexInMountainArray = function(arr) {
	//Consider the arr as two sorted array one is in ascending order and another one is in descending order
    let start = 0; 
	let end = arr.length - 1;
	
	while(start < end) {
		let mid = Math.trunc((start + end) / 2);
		//This means we are in the descending part of the array
		if(arr[mid] < arr[mid + 1]){
			start = mid +1;
		}
		//This means we are in the ascending part of the array
		if(arr[mid] > arr[mid + 1]) {
			end = mid;
		}
	}
	//start or end both will have the index value of the peak value
	//can return anything
	return start;
};
