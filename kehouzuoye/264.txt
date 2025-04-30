/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    /* 
        丑数的递推性质： 丑数只包含因子 2，3，5，因此有
        “丑数 = 某较小丑数 * 某因子”（例如 10 = 5 * 2）
        dp[i + 1] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5 )
    */

    let a = b = c = 0, // a b c 分为为对应取因子 2 3 5的索引下标
        n2, n3, n5, min
    const dp = [1, ...new Array(n - 1)]

    for (let i = 1; i < n; i++) {
        n2 = dp[a] * 2, n3 = dp[b] * 3, n5 = dp[c] * 5, 
        min = Math.min(n2, n3, n5)

        dp[i] = min

        if (min === n2) a++
        if (min === n3) b++
        if (min === n5) c++
    }

    return dp[n - 1]
};