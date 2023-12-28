class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        //Error Correction
        if (nums.empty()) {
            return 0;
        }
        
        //Initialize variables
        int k = 1; //k is the index of the last unique element
        
        //Two Pointer Approach
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[k - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }
        
        return k;
    }
};