function productFib(prod) {
    let result;

    let fb = 0;
    let fbOne = 1;
    let next;
    for (let i = 1; i <= prod; i++) {
        if (prod / fb === fbOne) {
            result = [fb, fbOne, true];
            break;
        }
        if (fb * fbOne > prod) {
            result = [fb, fbOne, false];
            break;
        }
        // continue to next fibonacci number
        next = fb + fbOne;
        fb = fbOne;
        fbOne = next;
    }
    return result;
}

// I know, I can return in the loop, but I like to have a single return statement.
