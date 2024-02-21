function canJump(nums: number[]): boolean {
    let pointer: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        if (pointer < 0) return false;
        pointer = Math.max(pointer, nums[i]);
        pointer -= 1;
    }

    return true;
}

export { canJump };
