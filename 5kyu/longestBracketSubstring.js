function findLongest(str) {
    let maxLen = 0;
    const stack = [];
    let base = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push(i);
        } else if (stack.length === 0) {
            base = i;
        } else {
            stack.pop();
            if (stack.length === 0) {
                maxLen = Math.max(maxLen, i - base);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLen;
}
