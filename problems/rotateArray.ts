function rotate(nums: number[], k: number): void {
    for (let i: number = 0; i < k; i++) {
        const popped = nums.pop();
        nums.splice(0, 0, popped!);
    }
}

export { rotate };
