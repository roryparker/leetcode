class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        
    int k = 0; // Variable to track the number of elements not equal to val

    // Iterate through the array using two pointers
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != val) {
           nums[k++] = (nums[i] != val) ? nums[i] : nums[k];

            // If the current element is not equal to val, move it to the front of the array
            //nums[k] = nums[i];
            //k++; // Increment the count of elements not equal to val
        }
    }
        
    // The first k elements now contain the elements not equal to val
    // The remaining elements in the array are not important for the result

    
    return k; // Return the count of elements not equal to val
    }
};