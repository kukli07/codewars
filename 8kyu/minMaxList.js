// Parameters: Non empty Array with integers, positive AND negative
// Return: Largest Integer inside the Array
const max = function (list) {
    // sort array in decending order
    list.sort((a, b) => b - a);
    // statement below given, therefore not changing
    return list[0];
};

// Example: max([1,2,3,-4]) // returns 3

// Parameters: Non empty Array with integers, positive AND negative
// Return: Smallest Integer inside the Array

const min = function (list) {
    // sort array in ascending order
    list.sort((a, b) => a - b);
    // statement below given, therefore not changing
    return list[0];
};

// Example: min([1,2,3,-4]) // returns -4

// Math.min / Math.max solution is cleaner, but "return list[0]" is given, so I did it this way.
