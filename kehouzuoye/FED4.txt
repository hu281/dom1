<html>
 
<head>
    <meta charset=utf-8>
</head>
 
<body>
 
    <script type="text/javascript">
        // sort快速写法
        // const _quickSort = array => {
        //     // 补全代码
        //     return array.sort((a, b) => a - b)
        // }
        // console.log(_quickSort([0, -1, 1, -2, 2]));
        // 循环写法
        const _quickSort = array => {
            // 补全代码
            let arr = []
            let a = array[0]
            array.forEach(v => {
                if (a < v) {
                    arr.push(v)
                } else {
                    arr.unshift(v)
                }
            })
            return arr
        }
        console.log(_quickSort([0, -1, 1, -2, 2, -3, -9, 9]));
    </script>
</body>
 
</html>