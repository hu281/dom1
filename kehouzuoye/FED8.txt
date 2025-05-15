<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
  </head>
  <body>
    <script>
    // 补全代码\n    
      Array.prototype._filter = function (fn){
        if(typeof fn !== 'function') return
        let arr = [];
        for(let i = 0 ;i<this.length ;i++){
          if(fn(this[i])){
            arr.push(this[i])
          }
        }
        return arr
      }
    </script>
  </body>
</html>