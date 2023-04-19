function smallEnough(a, limit) {
    let i = 0;
    let check = true;

    while (i < a.length && check === true) {
        if (a[i] > limit) {
            check = false;
        }
        i++;
    }
    return check;
}

/*
  Why while loop?
    - Just for fun and practice of while usage, because
    I rarely use them.
    - Basically the same as .every() array method, i think (just reversed logic).
*/
