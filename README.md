﻿# remove-duplicates-from-sorted-array
The line `nums[j] = nums[i]` plays an essential role in this function. It's not immediately obvious when you're only returning `j`, but remember, the problem's requirements are two-fold:

1. Return the count of unique numbers (this is the `j` value).
2. Modify the `nums` list in-place to have the unique numbers at the beginning.

The line `nums[j] = nums[i]` helps achieve the second requirement. Let's break it down:

- The loop iterates over the list with the `i` index, comparing each number with its predecessor.
- If a number is found that is different from its predecessor (i.e., it's not a duplicate), the expression `nums[j] = nums[i]` moves that number to the position pointed by the `j` index.
- The `j` index is then incremented, preparing it to store the next unique number.

By the end of the loop, the first `j` numbers in the list will be the unique numbers, and the rest will be the remaining unmodified numbers from the input. This is essentially "squeezing" the unique numbers to the start of the list.

Let's look at a step-by-step example to make this clearer:

**nums = [0,0,1,1,1,2,2,3,3,4]**

Initial state:  
`j = 1`, `i = 1` (loop starts from 1)  
`nums = [0,0,1,1,1,2,2,3,3,4]`

1st iteration (i=1):  
The number at index 1 is the same as its predecessor. So, nothing changes.  
`nums = [0,0,1,1,1,2,2,3,3,4]`

2nd iteration (i=2):  
The number at index 2 (`1`) is different from its predecessor (`0`). So, `nums[j] = nums[i]` moves the number `1` to the position `1`.  
Increment `j` to `2`.  
`nums = [0,1,1,1,1,2,2,3,3,4]`

3rd iteration (i=3):  
The number at index 3 is the same as its predecessor. So, nothing changes.  
`nums = [0,1,1,1,1,2,2,3,3,4]`

...and so on.

End Result:  
`nums = [0,1,2,3,4,1,2,3,3,4]`  
Notice the unique numbers are at the start of the list. The rest of the list doesn't matter for this problem.

Finally, `j = 5` is returned, which tells us there are 5 unique numbers in the list.
