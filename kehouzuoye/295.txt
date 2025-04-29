var MedianFinder = function() {
    this.data = [];
};

MedianFinder.prototype.addNum = function(num) {
    this.data.push(num);
};

MedianFinder.prototype.findMedian = function() {
    const length = this.data.length;
    if (!length) {
        return null;
    }
    this.data.sort((a, b) => a - b);

    const mid = Math.floor((length - 1) / 2);
    if (length % 2) {
        return this.data[mid];
    }
    return (this.data[mid] + this.data[mid + 1]) / 2;
};