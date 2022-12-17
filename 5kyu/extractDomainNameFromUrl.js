// Params: String
// Return: String

function domainName(url) {
    // Split url at "//", if possible
    const protocolAndDomain = url.split("//")[1] ? url.split("//")[1] : url;
    // Split url again at "/"
    const domain = protocolAndDomain.split("/")[0];
    // Split url again at "."
    const domainParts = domain.split(".");
    // Check if first entry in array is www
    if (domainParts[0] === "www") {
        // If yes, return second entry
        return domainParts[1];
    }
    // If no, return first entry
    return domainParts[0];
}
// Example:
// domainName("https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript")
// return codewars

// TIL: .replace() can be used to solve this easily.
