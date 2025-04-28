/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visited = new Array(n).fill(false);
  let circles = 0;
  const dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] == 1 && !visited[j]) {
        visited[j] = true;
        dfs(j);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    // 如果该城市未被访问过，从该城市开始深度优先搜索
    if (!visited[i]) {
      dfs(i);
      // 深度优先搜索后知道当前城市与哪些城市是联通的 ，得到一个连通分量
      circles++;
    }
  }
  // 遍历完全部城市之后，就可以得到连通分量的总数（也就是省份的数量）
  return circles;
};