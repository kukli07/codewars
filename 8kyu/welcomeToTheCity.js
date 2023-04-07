function sayHello(name, city, state) {
    return `Hello, ${name.reduce(
        (prev, curr) => `${prev} ${curr}`
    )}! Welcome to ${city}, ${state}!`;
}

// A simple join would have been better lol
