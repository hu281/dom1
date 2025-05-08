/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  if(matrix.length < 1) return 0
  let arr = matrix.reduce((a, b) => merge(a, b))
  return arr[k - 1]
};

function merge(left, right){
  let llen = left.length
  let rlen = right.length
  let i = 0
  let j = 0
  let res = []
  while(i < llen && j < rlen){
    if (left[i] < right[j]) {
      res.push(left[i++])
    } else {
      res.push(right[j++])
    }
  }
  while(i < llen) res.push(left[i++])
  while(j < rlen) res.push(right[j++])
  return res
}