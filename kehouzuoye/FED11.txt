<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
  </head>
  <body>
    <script >
      // 补全代码  
      Function.prototype._call = function(context,...rest){
        context.fn = this;
        return context.fn(...rest)
      }
    </script>
  </body>
</html>