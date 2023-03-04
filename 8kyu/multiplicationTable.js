function multiTable(number) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${i} * ${number} = ${i * number}\n`;
    }
    return result.trim();
}

// trim at the end, because of the extra newline
