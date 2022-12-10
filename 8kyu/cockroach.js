// Params: Number - s -  >= 0
// Return: Number - s in cm/s

// Function to convert km/h to cm/s
function kmhToCms(kmh) {
    return kmh / 0.036;
}

function cockroachSpeed(s) {
    // Convert km/h to cm/s
    const speedInCms = kmhToCms(s);
    // Return result
    return Math.floor(speedInCms);
}

// Example:
// cockroachSpeed(5) // returns 138

// For readability reasons, I liked the idea of abstraction.
