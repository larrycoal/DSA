var maxProfit = function (prices) {
  let buy = prices[0];
  let sell = 0;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      if (maxProfit <= 0) {
        sell = prices[i];
      }
    }
    if (maxProfit < prices[i] - buy) {
      maxProfit = prices[i] - buy;
    }
  }
  return maxProfit;
};
