function maxProfit(prices: number[]): number {
    let buy: number = 0;
    let sell: number = 1;

    let maxProfitValue: number = 0;

    while (sell < prices.length) {
        if (prices[buy] > prices[sell]) {
            buy = sell;
        } else {
            const profit: number = prices[sell] - prices[buy];
            maxProfitValue = Math.max(profit, maxProfitValue);
        }
        sell++;
    }

    return maxProfitValue;
}

export { maxProfit };
