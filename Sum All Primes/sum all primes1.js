// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having 
// only two divisors, one and itself. For example, 2 is a prime number
// because it's only divisible by one and two.
// The provided number may not be a prime.


function sumPrimes(num) {

    // Create an array
    var prime = [];

    // Create a simple 'for loop' to push numbers to array <= num ... if prime
    for (var i = 2; i <= num; i++) {

        if (isPrime(i)) {
            prime.push(i);
        }
    }

    // write helper function that checks if a number is a prime
    function isPrime(num) {

        for (var j = 2; j < num; j++) {
            if (num % j === 0) {
                return false;
            }
        }
        return true;
    }


    // reduce to add numbers in array
    return prime.reduce(function(a, b) {
        return a + b;
    });
}

console.log(sumPrimes(100));