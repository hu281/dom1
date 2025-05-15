var reorganizeString = function(S) {
    var h = new Map, v = (s, n) => (n === 1 ? h.delete(s) : h.set(s, n - 1), s), r = ''
    for (var s of S) h.set(s, h.has(s) ? h.get(s) + 1 : 1)
    while(h.size) {
        var a = Array.from(h.entries()).sort((a, b) => b[1] - a[1])
            if (r.slice(-1) === a[0][0]) {
                r = ''
                break
            }
            r += v(a[0][0], a[0][1]) + (a[1] ? v(a[1][0], a[1][1]) : '')
    }
    return r
};