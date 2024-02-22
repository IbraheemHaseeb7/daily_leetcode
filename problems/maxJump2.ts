function jump(nums: number[]): number {
    let value: number = 0;
    let count: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        let currentValue: number = nums[i];
        if (i === nums.length - 1) return count;

        if (value < currentValue) {
            value = currentValue;
            count++;
        }

        value--;
    }

    return count;
}

export { jump };
