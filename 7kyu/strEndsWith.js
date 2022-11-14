function solution(str, ending) {
    return str.endsWith(ending);
}
// Nedlessly complicated solution :)
function solution2(str, ending) {
    const strEnding = [];
    // need to define strArr, because we use pop() method
    const strArr = str.split("");
    for (let i = 0; i < ending.length; i++) {
        strEnding.push(strArr.pop());
    }
    return (
        JSON.stringify(strEnding.sort()) ===
        JSON.stringify(ending.split("").sort())
    );
}
