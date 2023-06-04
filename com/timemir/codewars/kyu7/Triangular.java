// Kata Name: Triangular Treasure
package com.timemir.codewars.kyu7;

public class Triangular {

  public static long triangular(long n) {
    if (n <= 0)
      return 0;
    long sum = 0;

    for (int i = 1; i <= n; i++) {
      sum += i;
    }

    return sum;
  }

  public static void main(String[] args) {
    long test = triangular(15);

    System.out.println(test);
  }
}
