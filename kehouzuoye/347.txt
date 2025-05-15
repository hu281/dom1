/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const swap = function (arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    const heapify = function (heap, i, map) {
        while (Math.floor(i / 2) > 0 && map.get(heap[i]) < map.get(heap[Math.floor(i / 2)])) {
            swap(heap, i, Math.floor(i / 2));
            i = Math.floor(i / 2);
        }
    }
    const buildHeap = function (heap, heapSize, map) {
        while (heapSize < heap.length - 1) {
            heapSize++;
            heapify(heap, heapSize, map);
        }
    }
    //1. 先用map记录元素出现次数
    let map = new Map();
    for (let num of nums) {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    }
    //2. 建立堆，然后对map元素进行堆化
    let heap = [,];
    if (map.size <= k) {
        return [...map.keys()];
    }
    let i = 0;
    for (let [key, value] of map.entries()) {
        if (i < k) {
            heap.push(key);
            //取前K个数建立小顶堆 
            if (i === k - 1) {
                buildHeap(heap, 1, map);//使用自下而上的方式
            }
        } else {
            if (value > map.get(heap[1])) {
                heap[1] = key;
                buildHeap(heap, 1, map);//使用自下而上的方式
            }
        }
        i++;
    }
    let res = heap.slice(1);
    return res;
};