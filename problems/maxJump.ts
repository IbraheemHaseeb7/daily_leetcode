function canJump(nums: number[]): boolean {
    let pointer: number = 0;
    let pointerValue = nums[pointer];

    while (true) {
        if (pointerValue === 0 && pointer < nums.length - 1) return false;
        if (pointer === nums.length - 1 || pointer === nums.length) return true;
        if (pointer > nums.length) return false;

        pointer += pointerValue;
        pointerValue = nums[pointer];
    }
}

export { canJump };
