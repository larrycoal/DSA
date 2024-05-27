var maxProfit = function (prices) {
  let buy = prices[0];
  let sell = prices[0];
  let maxProfit = 0;
  for (let i = 0; i <= prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      sell = prices[i];
    }
    if (prices[i] > buy) {
      if (prices[i + 1] < prices[i]) {
        maxProfit += prices[i] - buy;
        buy = prices[i + 1];
        sell = prices[i + 1];
      } else {
        sell = prices[i];
      }
    }
  }
  return (maxProfit += sell - buy);
};
