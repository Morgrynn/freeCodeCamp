function spinalCase(str) {

    // replace every space with a dash
    // replace all uppercase letters with lowercase
    // replace all underscores with a dash
    // replace any two words not seperated with a space with lowercase and a dash

    // regexr.com for reference

    // replace(find what you want to change, change it to this)
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
    //replace(find what you want to change, change it to this)
    return str.replace(/\s|_/g, "-");

}

console.log(spinalCase("AllThe-small Things"));