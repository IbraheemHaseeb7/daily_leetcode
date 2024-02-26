function productExceptSelf(nums: number[]): number[] {
    let answer: number[] = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    let rightProduct: number = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}

export { productExceptSelf };
