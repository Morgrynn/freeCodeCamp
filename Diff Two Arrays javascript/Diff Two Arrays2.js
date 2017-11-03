// JavaScript source code

function diff(arr1, arr2) {

    // Merge both arrays on the new one using .concat()
    var newArr = arr1.concat(arr2);
    // Create a callback function to use with filter. The function will check if the number is 
    // not present in both original arrays and return it.
    function check(item) {
        if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
            return item;
        }
    }
    // Return the filtered array.
    return newArr.filter(check);
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
