function majorityElement(nums: number[]): number {
    let element: number = 0;
    let count: number = 0;

    nums.forEach((value) => {
        if (count === 0) {
            count = 1;
            element = value;
        } else if (element === value) {
            count++;
        } else {
            count--;
        }
    });

    return element;
}

export { majorityElement };
