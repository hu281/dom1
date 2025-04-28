/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 * 
 * @example equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 * map = Map(3) { 
 * 'a' => [ [ 'b', 2 ] ], a到达b的距离为2
 * 'b' => [ [ 'a', 0.5 ], [ 'c', 3 ] ], b到达a的距离为0.5，b到达c的距离为3
 * c' => [ [ 'b', 0.3333333333333333 ] ] c到达a的距离为0.3333333333333333
 * }
 * visited = Map(3) { 'a' => false, 'b' => false, 'c' => false }
 */
var calcEquation = function(equations, values, queries) {
    let res = []; // 答案
    let map = new Map(); // 邻接表：存储有向带权图
    let visited = new Map();  // 访问表
    const createMap = () => { // 创建邻接表
        for (let i = 0; i < equations.length; ++i) {
            let [a, b] = equations[i];
            let v = values[i];

            initMapAndVisited(a);
            initMapAndVisited(b);
            updateMap(a, b, v);
        }
    };
    const initMapAndVisited = element => { // 初始化 邻接表和访问表
        if (!map.has(element)) {
            map.set(element, []);
            visited.set(element, false);
        }
    };
    const updateMap = (a, b, v) => { // 更新 邻接表
        map.get(a).push([b, v]);
        map.get(b).push([a, 1 / v]);
    };
    const getRes = queries => { // 求解答案
        for (let question of queries) {
            let [a, b] = question;
            if (map.has(a) && map.has(b)) {
                visited.set(a, true);
                res.push(solveQuestion(a, b));
                visited.set(a, false);
            } else {
                res.push(-1.0);
            }
        }
    };
    const solveQuestion = (a, b) => { // 获得a到b的长度
        if (a === b) return 1.0;
        let paths = map.get(a);

        for (let i = 0; i < paths.length; ++i) {
            let [node, value] = paths[i];
            if (!visited.get(node)) {
                visited.set(node, true);
                let resultValue = solveQuestion(node, b);
                visited.set(node, false);
                if (resultValue !== -1.0) return value * resultValue;
            }
        }

        return -1.0;
    };

    createMap(); // 创建邻接表
    getRes(queries); // 求解答案

    return res;    
};