function titleToNumber(columnTitle: string): number {
    let sum: number = 0;
    const len = columnTitle.length;
    for (let i = 0; i < len; i++) {
        let char = columnTitle[i].charCodeAt(0) - 64;
        const value = Math.pow(26, len - i - 1) * char;
        sum += value;
    }
    return sum;
}

export { titleToNumber };
