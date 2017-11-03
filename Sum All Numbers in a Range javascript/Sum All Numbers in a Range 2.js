// JavaScript source code

function sumAll(arr) {

  // Use the arr.reduce() function to return max number in array
  var max = arr.reduce(function(arr1,arr2) {
    return Math.max(arr1, arr2);
  });

  // Use the arr.reduce() function to return max number in array
  var min = arr.reduce(function(arr1,arr2) {
    return Math.min(arr1, arr2);
  });

  // Create a variable that subtracts min from max and adds 1
  var n = (max - min + 1);
  // Create variable that adds max & min, divides by 2 and multiplies by n
  var total = n * (max + min) / 2;
  // Return the total
  return total;
}

sumAll([1, 4]);
