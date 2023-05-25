package com.timemir.codewars.kyu8;
import java.util.Arrays;

public class HowGoodAreYouReally {
  private HowGoodAreYouReally(){
    throw new IllegalStateException("Utility class");
  }
  public static boolean betterThanAverage(int[] classPoints, int yourPoints) {
    double average =
      Arrays.stream(classPoints)
      .reduce(0, (prev, curr) -> prev + curr) /
      (double) classPoints.length;

    return yourPoints > average;
  }
  public static void main(String[] args) {
    int[] classPoints = {70, 80, 90};
    int yourPoints = 85;
    System.out.println(betterThanAverage(classPoints, yourPoints));
  }
}