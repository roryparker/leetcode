public class Solution {
    
    // create public variable and convert "n" to a 32 bit integer
    public int HammingWeight(uint n) {
        // Assign variable to "n" and count = 0
        uint x = n;
        int count = 0;
        
        // Each bit in the 32 bit is checked to see how many times the second number "2" is                  divisible into the first number (what is the remainder?). If the remainder is 1, the              count variable increases b 1.
        
        // 0 % 2 = 0
        // 1 % 2 = 1
        
        while (x > 0) {
            if (x % 2 == 1) {
                count++;
            }
            
            x = x / 2;
        }
        
        return count;
    }
}

