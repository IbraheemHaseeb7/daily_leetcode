function removeDuplicates(nums: number[]): number {
    let uniqueCount: { [key: string]: number } = {};
    let arrayEnd = nums.length;

    for (let i: number = 1; i < arrayEnd; i++) {
        let value = nums[i];
        if (value === nums[i - 1]) {
            if (!uniqueCount[value]) {
                uniqueCount[value] = 2;
            } else {
                uniqueCount[value] = uniqueCount[value] + 1;
            }

            if (uniqueCount[value] > 2) {
                let removed: number[] = nums.splice(i, 1);
                nums.push(removed[0]);

                i--;
                arrayEnd--;
            }
        }
    }

    return arrayEnd;
}

export { removeDuplicates };
