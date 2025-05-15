<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
  </head>
  <body>  
    <script>  
      // 补全代码\n        
      Function.prototype._bind = function(context,fn){
        let _this = this;
        return function(...args){
          return _this.apply(context,args)
        }
      }
    </script>
  </body>
</html>