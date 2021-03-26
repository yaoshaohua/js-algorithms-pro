// 70题
function climbStairs(n: number) {
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 746
function minCostClimbingStairs(cost: number[]) {
  cost.push(0);
  let dp = [],
    len = cost.length;
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }
  return dp[len - 1];
}
