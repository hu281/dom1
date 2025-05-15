<!DOCTYPE html>
<html>   
  <head>
    <meta charset=utf-8>
  </head>
  <body>      
    <script>
      const _new = function(constructor) {
        // 补全代码\n      
        let obj = {};
        obj.__proto__ = constructor.prototype;
        constructor.call(obj)
        return obj;
      }
    </script>
  </body>
</html>