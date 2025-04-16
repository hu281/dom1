/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
  var findOrder = function(numCourses, prerequisites) {
    let courses = Array(numCourses).fill(0)           
    let obj = {}                                       
    prerequisites.forEach(item => {
      let [one, two] = item                            
      courses[one]++                                   
      obj[two] ? obj[two].push(one) : obj[two] = [one] 
    })
    let res = []
    let queue = []                    
    courses.forEach((t, i) => {       
      if(t === 0) queue.push(i)       
    })
    while(queue.length){
      let cur = queue.shift()        
      res.push(cur)                   
      let list = obj[cur]                  
      list && list.forEach(item => { 
        courses[item]--              
        if(courses[item] == 0){      
          queue.push(item)
        }
      })
    }
    return res.length === numCourses ? res : []
  };