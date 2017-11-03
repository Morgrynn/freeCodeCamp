function sumFibs(num) {

    //create new array property identifying last value
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    // create new array property identifying second to last value
    Array.prototype.secondLast = function() {
        return this[this.length - 2];
    }

    // create array starting Fib sequence
    var fib = [1, 1];

    // continue sequence (adding last 2 numbers in array) while the next fib number < (num)
    while (fib.secondLast() + fib.last() <= num) {
        fib.push(fib.secondLast() + fib.last());
    }

    // remove all even numbers from array (filter)
    return fib.filter(function(x) {
        return x % 2 !== 0;

        // add all numbers in array (reduce)
    }).reduce(function(a, b) {
        return a + b;
    });

}
console.log(sumFibs(100));