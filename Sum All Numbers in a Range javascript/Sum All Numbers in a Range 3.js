// JavaScript source code

function sumAll(arr){
  // Uses math library to find max number in the array
  var maxNum = Math.max(null, arr);
  // Uses math library to find min number in the array
  var minNum = Math.min(null, arr);
  // Used to get range for a loop
  var range = maxNum - minNum;
  // Total numbers to be added
  var total = 0;
  // Use a for loop to loop through the numbers
  for(var i = 1; i < range; i++){

	total = total + minNum + i;
  }
  // Adding min and max to total them returning
  total = total + maxNum + minNum;

  return total;
}

sumAll([1, 4]);