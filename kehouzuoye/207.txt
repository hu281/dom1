/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let list = Array(numCourses).fill(0)
  let obj = {}                         
  for(let p of prerequisites){
    let [x, y] = p                    
    list[x]++
    obj[y] ? obj[y].push(x) : obj[y] = [x]
  }
  let num = 0                        
  let queue = []
  list.forEach((t, i) => {
    if(!t) queue.push(i)              
  })
  while(queue.length){
    num++
    let head = queue.shift()
    obj[head] && obj[head].forEach(t => {
      list[t]--
      if(list[t] === 0) queue.push(t)
    })
  }
  return num === numCourses 
};