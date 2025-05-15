/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let index = -1
    if(this.arr.length == 0) {
        this.arr.push(num)
        return null
    }
    if(num <= this.arr[0]) {
        //如果插入值为最小值
        index = 0
    } else if( num >= this.arr[this.arr.length - 1]) {
        //如果插入值为最大值 
        index = this.arr.length
    } else {
        for(let i = 0; i < this.arr.length - 1; i++) {
            if(num > this.arr[i] && num <= this.arr[i+1]){
                index = i + 1
                break
            }
        }
    }
    for(let i = this.arr.length; i >= index; i --) {
        this.arr[i] = this.arr[i - 1]
    }
    this.arr[index] = num
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // console.log(this.arr)
    let isOddLength = this.arr.length % 2 > 0
    let mideum = null
    let halfIndex = Math.floor(this.arr.length / 2)
    // console.log(halfIndex)
    if(isOddLength) {
        mideum = this.arr[ halfIndex ]
    } else {
        mideum = (this.arr[ halfIndex - 1] + this.arr[halfIndex] ) / 2
    }
    return mideum
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */