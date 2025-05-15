<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
 
        <script type="text/javascript">
            // 补全代码
            //fn(item, index, arr)
            //map(fn, context)     //执行fn时context被用作this
            Array.prototype._map = function(fn, context) {
                if(typeof(fn) !== 'function') return
                let arr = this
                let newArr = []
                for(let i = 0; i < arr.length; i++) {
                    newArr[i] = fn.call(context, arr[i], i, arr)
                }
                return newArr
            }
        </script>
    </body>
</html>
