// @ Params: Array[String]
// @ Returns: Array[String] in reverse order

function reverseList(list) {
    // create binding for a copy of list
    const listCopy = [...list];
    // use .reverse() method on the copy & return reversed array
    return listCopy.reverse();
}

// Example:
// reverseList([1, 2, 3]) // returns [3, 2, 1]
