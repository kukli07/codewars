function incrementString(str) {
    const regex = /\d+/;
    // num can sometimes be null
    const num = str.match(regex) || [0];
    const newNum = String(Number(num[0]) + 1).padStart(num[0].length, "0");

    // if there is no number in the string, num[0].length will be undefined
    // then we just add the new number to the end of the string
    const newStr =
        num[0].length === undefined
            ? str + newNum
            : str.replace(new RegExp(`${num[0]}$`), newNum);

    return newStr;
}
// Optimization:
// -For cases of no number in the string, we can just check for that at the start
//  and then return str + 1, without going throught the whole function
// -Change the regex to /\d*$/ to match the last number in the string, however
//  the newStr logic would have to be adjusted accordingly.

// Improved version:

function incrementString2(str) {
    const num = str.match(/\d*$/);
    if (num && num[0].length === 0) {
        return `${str}1`;
    }
    const newNum = (Number(num[0]) + 1).toString().padStart(num[0].length, "0");
    return str.slice(0, -num[0].length) + newNum;
}
