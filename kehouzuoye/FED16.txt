<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
         
        <script type="text/javascript">
            const _sampleDeepClone = target => {
                if(typeof target === 'object' && target !== null){
                    let res = Array.isArray(target) ? [] : {};
                    for(let i in target){
                        if(typeof target[i] ==='object')
                            res[i] = _sampleDeepClone(target[i]);
                        else{
                            res[i] = target[i];
                        }
                    }
                    return res;
                }
                else
                    return target;
            }
        </script>
    </body>
</html>