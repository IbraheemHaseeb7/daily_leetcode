function maxProfit(prices: number[]): number {
    let buy: number = 0;
    let sell: number = 1;

    let totalProfit: number = 0;

    while (sell < prices.length) {
        let sellPrice: number = prices[sell];
        let buyPrice: number = prices[buy];
        if (sellPrice > buyPrice) {
            totalProfit += sellPrice - buyPrice;
        }
        buy = sell;
        sell++;
    }
    return totalProfit;
}

export { maxProfit };
