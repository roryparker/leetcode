class Solution {
public:
    vector<int> applyOperations(vector<int>& nums) {
        int n = nums.size(); // Get the size of the array

        for (int i = 0; i < n - 1; ++i) {
            // Check if adjacent elements are equal
            if (nums[i] == nums[i + 1]) {
                nums[i] *= 2; // Multiply nums[i] by 2
                nums[i + 1] = 0; // Set nums[i + 1] to 0
            }
            // Otherwise, do nothing for this operation
        }

        // Shift all the zeros to the end of the array
        int writeIdx = 0; // Index to write non-zero elements
        for (int i = 0; i < n; ++i) {
            if (nums[i] != 0) {
                nums[writeIdx++] = nums[i]; // Write non-zero element
            }
        }

        // Fill the remaining positions with zeros
        for (int i = writeIdx; i < n; ++i) {
            nums[i] = 0;
        }

        return nums;
    }
};