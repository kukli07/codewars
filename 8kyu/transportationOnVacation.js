function rentalCarCost(d) {
    let price = d * 40;

    if (d >= 7) {
        price -= 50;
    } else if (d >= 3) {
        price -= 20;
    }

    return price;
}
