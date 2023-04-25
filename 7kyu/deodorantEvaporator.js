/* 
  content : ml
  evap_per_day : %
  threshold : %
*/
function evaporator(content, evap_per_day, threshold) {
    const minimum = content * (threshold / 100);
    let days = 0;
    while (content > minimum) {
        const lossPerDay = content * (evap_per_day / 100);
        content -= lossPerDay;
        days++;
    }
    return days;
}
