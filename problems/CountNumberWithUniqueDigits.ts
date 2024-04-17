function countNumbersWithUniqueDigits(n: number): number {
    if (n === 0) return 1;
    if (n === 1) return 10;
    if (n > 10) return 10;
    if (n < 0) return 0;

    let res = 9;

    for (let i = 9; i > 10 - n; i--) res *= i;

    return res + countNumbersWithUniqueDigits(n - 1);
}

export { countNumbersWithUniqueDigits };
