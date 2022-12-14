// Params: String
// Returns: Number - Amount of chars occuring more than once (case-insensitive)

function duplicateCount(text) {
    let result = 0;
    // create object to store unique chars
    const checkObj = {};
    // loop through text
    text.toLowerCase()
        .split("")
        .forEach((char) => {
            // if char is in object, add 1 to value
            if (checkObj[char]) {
                // if we find a duplicate, meaning the char is already in the object,
                // we add 1 to the result. If the char occurs more than twice, we don't add
                // to the result again!
                if (checkObj[char] === 1) {
                    result += 1;
                }

                checkObj[char] += 1;
            }
            // else add char to object with value of 1
            else {
                checkObj[char] = 1;
            }
        });
    // return result
    return result;
}

// Example:
// duplicateCount("aabcCdefg") // returns 2

// Technically, we do not need to count the occurences of the chars inside the
// object, but we might as well do it, since we are looping through the string.
// This allows to modify the function to also return the object with the occurences
// of all the chars.
