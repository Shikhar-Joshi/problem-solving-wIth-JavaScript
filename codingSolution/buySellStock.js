// Question Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let maxVal = 0;
  let len = prices.length;
  let priceDiff = 0;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j <= len - 1; j++) {
      priceDiff = prices[j] - prices[i];
      if (priceDiff > 0 && priceDiff > maxVal) {
        maxVal = priceDiff;
      }
    }
  }
  return maxVal;
};
