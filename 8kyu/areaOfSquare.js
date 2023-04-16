/* 
  Assume we add 3 more squares to the shown diagram so that we get a bigger square,
  consisting of 4 squares and each square having the right orientation, so that the 
  white lines form a perfect circle
  Now we can see that the length of one side of the 4 smaller squares is equal to the 
  radius of the big perfect circle.
  In order to calculate the radius, we use the formular for the circumference of a circle:
      C = 2 * π * r
  <=> r = C / 2 * π 
  
  We can now deduct that the circumference C of the circle of 4 squares is just 4 * A.
  <=> r = (4 * A) / (2 * π)
  
  Now we can calculate r^2 and we get the area of the red circle.
*/

function squareArea(A) {
    const r = (4 * A) / (2 * Math.PI);

    return r ** 2;
}
