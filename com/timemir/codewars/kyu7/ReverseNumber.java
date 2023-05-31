package com.timemir.codewars.kyu7;

public class ReverseNumber {

  public static int reverse(int number) {
    // Check if the number is negative to "save" the "-" sign.
    boolean isNegative = number < 0;

    // Convert the number into an array for easy looping.
    int[] numberArray = Integer.toString(Math.abs(number)).chars().map(c -> c - '0').toArray();

    // Loop over number in reverse order and create a reversed number.
    StringBuilder bld = new StringBuilder();
    for (int i = numberArray.length - 1; i >= 0; i--) {
      bld.append(numberArray[i]);
    }
    int reversed = Integer.parseInt(bld.toString());

    // Ternary expression to either add the "-" or not, based on isNegative boolean.
    return isNegative ? reversed * -1 : reversed;
  }

}
