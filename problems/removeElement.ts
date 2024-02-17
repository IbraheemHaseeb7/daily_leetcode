function removeElement(nums: number[], val: number): number {
    let count: number = 0;
    let arrayEnd = nums.length;

    for (let i: number = 0; i < arrayEnd; i++) {
        if (nums[i] === val) {
            count++;

            let removed: number[] = nums.splice(i, 1);
            nums.push(removed[0]);

            i--;
            arrayEnd--;
        }
    }

    return nums.length - count;
}

export { removeElement };
