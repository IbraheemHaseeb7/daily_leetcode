function jump(nums: number[]): number {

    if (nums.length === 1) return 0;

    let currPtr: number = 0;
    let nextMaximumPtr: number = 0;
    let count: number = 0;
    let isNextMaximumPtrUpdated = false;

    function helper(currPtr: number) {
        count++;
        for (let i: number = currPtr + 1; i <= nums[currPtr] + currPtr; i++) {
            if (i === nums.length - 1) return count;
            if (nums[i] >= nums[nextMaximumPtr]) {
                nextMaximumPtr = i;
                isNextMaximumPtrUpdated = true;
            }
        }

        if (!isNextMaximumPtrUpdated) {
            nextMaximumPtr = nums[currPtr] + currPtr;
            // isNextMaximumPtrUpdated = false;
        }
        helper(nextMaximumPtr);
    }

    helper(currPtr);

    return count;
}

export { jump };
