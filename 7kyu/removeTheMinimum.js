// @Paramters: numbers:Array; only integers, >0
// @Returns: NEW Array with lowest num removed
function removeSmallest(numbers) {
    // copy numbers array
    const numbersCopy = [...numbers];
    // find the index of the first lowest number
    const lowestIndex = numbersCopy.indexOf(Math.min(...numbersCopy));
    // remove the entry of that index
    numbersCopy.splice(lowestIndex, 1);
    // return new arrray
    return numbersCopy;
}

// Examples:
// removeSmallest([1,2,3,4,5]) // returns: [2,3,4,5]
// removeSmallest([5,4,2,1,3]) // returns [5,4,2,3]
