function pairElement(str) {

    var pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };

    // The split() method splits a String object into
    // an array of strings by separating the string into
    // substrings, using a specified separator string
    // to determine where to make each split.

    //The map() method creates a new array with the 
    // results of calling a provided function on every
    // element in the calling array.


    return str.split('').map(function(base) {
        return [base, pairs[base]];
    });

}

pairElement("GCG");