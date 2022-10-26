function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce < 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  let counter = 1;
  let helper = h;

  while (helper * bounce > window) {
    helper *= bounce;
    counter += 2;
  }
  return counter;
}
// Start the counter at 1, because if conditions are met, we always see it on the first way down
// While loop and every iteration we reduce the bounce by h * bounce.
// If the bounce is higher than the window, we add 2,
// else stop the loop and return counter

// we use a helper variable for h, because of AirBnB style guide
// (Don't mutate parameters)
