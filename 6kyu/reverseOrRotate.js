function revrot(str, sz) {
    // Input Validation
    if (sz <= 0 || str === "" || sz > str.length) return "";

    // 1. Create chunks of the input string, that are sz long
    //  Ignore the last chunk, if it is shorter than sz
    const chunks = [];
    let j = 0;
    for (let i = 0; i <= str.length; i += sz) {
        const chunk = str.slice(j, i);
        if (chunk.length === sz) chunks.push(chunk);
        j = i;
    }
    // 2. Reverse the chunks if the sum of the cubes of the chunk are divisable by
    //    2, else shift them by one position to the left.
    const chunksTransformed = chunks.map((chunk) => {
        const sumOfCubes = chunk
            .split("")
            .reduce((prev, curr) => prev + (+curr) ** 2, 0);

        if (sumOfCubes % 2 === 0) {
            return chunk.split("").reverse().join("");
        }
        return chunk.slice(1) + chunk[0];
    });

    return chunksTransformed.join("");
}
