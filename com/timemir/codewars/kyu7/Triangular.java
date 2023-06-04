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

// Of course there was a smart mathy solution to this,
// but I am not smart enough to come up with it by myself. :)
// return (n <= 0) ? 0 : n * (n + 1) / 2;