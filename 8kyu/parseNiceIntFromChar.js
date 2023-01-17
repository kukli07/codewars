function getAge(inputString) {
    const regex = /\d/;
    return Number(inputString.match(regex));
}

// There are a lot simpler ways, but wanted to use regex. :)
