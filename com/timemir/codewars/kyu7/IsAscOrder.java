package com.timemir.codewars.kyu7;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class IsAscOrder {

  public static boolean solve(int[] arr) {
    List<Integer> sortedNumbers = Arrays.stream(arr).boxed().sorted().collect(Collectors.toList());

    List<Integer> originalNumbers = Arrays.stream(arr).boxed().collect(Collectors.toList());

    return originalNumbers.equals(sortedNumbers);
  }

  public static void main(String[] args) {
    int[] arr = { 1, 2, 9, 4, 5, 7 };

    System.out.println(solve(arr));
  }
}
