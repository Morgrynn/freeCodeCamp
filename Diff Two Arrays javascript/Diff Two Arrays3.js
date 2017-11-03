// JavaScript source code

function diffArray(arr1, arr2) {

    var newArr = arr1.concat(arr2);

    // add the arrays together
    // check for repeating values
    return newArr.filter(function (value, index, array) {

        if (array.slice(0, index).indexOf(value) === -1 && array.slice(index + 1).indexOf(value) === -1) {
            return value;
        }
    });

}

sumAll([1, 4]);
