// JavaScript source code

function diffArray(arr1, arr2) {
    // variable to hold new array
    var newArr = [];
    // Itterate through array1
    for (var i = 0; i < arr1.length; i++) {
        // If array2 doesnt contain items in array1
        if (arr2.indexOf(arr1[i]) === -1) {
            // Add it to new array
            newArr.push(arr1[i]);
        }
    }
    // Itterate through array2
    for (var j = 0; j < arr2.length; j++) {
        // If array1 doesnt contain items in array2
        if (arr1.indexOf(arr2[j]) === -1) {
            // Add it to new array
            newArr.push(arr2[j]);
        }
    }


    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
