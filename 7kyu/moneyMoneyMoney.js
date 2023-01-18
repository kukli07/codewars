function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    let money = principal; // convention: do not reassign parameters.

    if (money === desired) return years;

    while (money < desired) {
        money += money * interest * (1 - tax);
        years++;
    }

    return years;
}
