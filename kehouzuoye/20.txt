/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('');
    let sl = s.length;
    if (sl % 2) return false;
    let map = new Map([[')', '('], [']', '['], ['}', '{']]);
    let stack = [];
    for(let i of s){
        if (map.get(i)) {
            if (stack[stack.length - 1] !== map.get(i)) return false;
            else stack.pop();
        } else {
            stack.push(i);
        }
    }
    return !stack.length;
};