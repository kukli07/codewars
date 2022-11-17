/* 
@Parameters: Array with Strings (Smileys)
@Return: number, 0 if empty array
*/

function countSmileys(arr) {
    // Counter = 0
    let counter = 0;
    // Loop trough Array
    for (let i = 0; i < arr.length; i++) {
        // arr[i] -> string

        // Check if first char is eyes
        if (arr[i][0] === ":" || arr[i][0] === ";") {
            // Check if second char is nose
            if (arr[i][1] === "-" || arr[i][1] === "~") {
                // Third char is available!
                // Check if third char is mouth
                if (arr[i][2] === ")" || arr[i][2] === "D") {
                    counter++;
                }
                // Second char is mouth
            } else if (arr[i][1] === ")" || arr[i][1] === "D") {
                counter += 1;
            }
        }
    }
    return counter;
}

// Examples
// countSmileys([":-)", ";)", "D-:", "8-%"]) // returns 2
// countSmileys([]) // returns 0

//------------------------------------------------------------
// Solution 2
/* 
@Parameters: Array with Strings (Smileys)
@Return: number, 0 if empty array
*/

function countSmileys2(arr) {
    return arr.filter((str) => {
        const eyes = str[0] === ":" || str[0] === ";";
        const nose = str[1] === "-" || str[1] === "~";
        const notNose = str[1] === ")" || str[1] === "D";
        const mouth = str[2] === ")" || str[2] === "D";

        if (eyes) {
            if (nose) {
                if (mouth) {
                    return str;
                }
            } else if (notNose) {
                return str;
            }
        }
    }).length;
}

// Examples
// countSmileys([":-)", ";)", "D-:", "8-%"]) // returns 2
// countSmileys([]) // returns 0

// ------------------------------------------------------------

// Regex Solution (But cheating)
function smiley2(arr) {
    const regex = "";
    return arr.filter((x) => x.match(regex)).length;
}
