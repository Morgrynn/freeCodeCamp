// JavaScript source code


function sumAll(arr) {
  
  // Use Math.max() to  find the maximum value of two numbers 
  var max = Math.max(arr[0], arr[1]);
  // Use Math.min() to find the minimum value of two numbers
  var min = Math.min(arr[0], arr[1]);
  // Create a temporary variable to add the numbers 
  var temp = 0;
  // Since the numbers might not always be in order 
  for(var i = min; i <= max; i++){
    // using max() and min() will help organise.
    temp += 1;
  }
  
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
sumAll([20, 4]);