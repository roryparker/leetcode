class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        // Shift all the zeros to the end of the array
        
        int n = nums.size(); 
        int writeIdx = 0; // Index to write non-zero elements
        
        for (int i = 0; i < n; i++) {
            if (nums[i] != 0) {
                nums[writeIdx++] = nums[i];      // Write non-zero element
            }
        }
        
        for (int i = writeIdx; i < n; i++) {
            nums[i] = 0;                         // Write zero element
        }
    }
};

// #include <iostream>
// #include <vector>

// void moveZeroes(std::vector<int>& nums) {
//     int insertPos = 0;

//     // Move non-zero elements to the beginning
//     for (int i = 0; i < nums.size(); ++i) {
//         if (nums[i] != 0) {
//             nums[insertPos++] = nums[i];
//         }
//     }

//     // Fill the remaining positions with zeros
//     for (int i = insertPos; i < nums.size(); ++i) {
//         nums[i] = 0;
//     }
// }