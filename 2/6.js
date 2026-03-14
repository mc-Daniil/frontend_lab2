Array.prototype.reverse = function () {
    return this.concat(this);
};

alert([1, 2, 3, 4, 5].reverse());
