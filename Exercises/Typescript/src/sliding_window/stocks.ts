
// brute force approach
function maxProfitBrute(prices: number[]): number {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++){
        for (let j = i +1 ; i < prices.length; j++){
            let profit = prices[j] - prices[i];
            if(profit > 0)
                maxProfit = Math.max(profit, maxProfit);
        }
    }
    return maxProfit;
};

// two pointer approach

function maxProfit(prices : number[]) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(right < prices.length){
        if (prices[right] <= prices[left]){
            left += 1;
        }else {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(profit, maxProfit);
        }
        right += 1;
    }
    return maxProfit;
}
