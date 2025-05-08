/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var q = [], n = '', f = '+', a = typeof s === 'string' ? Array.from(s).reverse() : s
    while(a.length || n) {
        var p = a.pop()
        if (p === ' ') continue
        if (p === '(')  {
            n = calculate(a)
        } else if (/\D/.test(p)) {
            switch (f) {
                case '+':
                    q.push(n)
                break;
                case '-':
                    q.push(-n)
                break;
                case '*':
                    q.push(q.pop() * n)
                break;
                case '/':
                    q.push(q.pop() / n | 0)
            }
            if (p === ')') break
            f = p, n = ''
        } else n += p
    }
    return q.reduce((p, v) => p + (v | 0), 0)
};