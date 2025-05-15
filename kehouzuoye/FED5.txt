<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
         
        <script type="text/javascript">
            const _permute = string => {
                // 补全代码
                let s = string.split('')
                let arr = []
                arr.push(`${s[0]}${s[1]}${s[2]}`)
                arr.push(`${s[0]}${s[2]}${s[1]}`)
                arr.push(`${s[1]}${s[0]}${s[2]}`)
                arr.push(`${s[1]}${s[2]}${s[0]}`)
                arr.push(`${s[2]}${s[0]}${s[1]}`)
                arr.push(`${s[2]}${s[1]}${s[0]}`)
                 
                return arr
            }
        </script>
    </body>
</html>
