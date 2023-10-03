class Solution {
  removeDuplicates(nums) {
    let j = 1;
    for (i = 1; i < nums.length(); i++) {
      if (nums[i] != nums[i - 1]) {
        nums[j] = nums[i];
        i++;
      }
      return j;
    }
  }
}

solution = new Solution();
result = solution.removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3]);

print(result);
