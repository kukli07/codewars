const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const maxDistance = fuelLeft * mpg;
    return maxDistance - distanceToPump >= 0;
};
