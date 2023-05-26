package com.timemir.codewars.kyu7;

import java.util.HashMap;
import java.util.Map;

public class FixStringCase {
  private FixStringCase() {
    // TODO
  }

  public static String solve(final String str) {
    Map<Integer, Integer> frequencyCounter = new HashMap<>();
    frequencyCounter.put(0, 0);
    frequencyCounter.put(1, 0);
    String[] letters = str.split("");

    // Count the frequency of lower and uppercase chars
    for (String letter : letters) {
      if (letter.toLowerCase().equals(letter)) {
        frequencyCounter.put(0, frequencyCounter.get(0) + 1);
      } else {
        frequencyCounter.put(1, frequencyCounter.get(1) + 1);

      }
    }
    // State, whether we need to convert str to lower or upper case
    Boolean toLowerCase = frequencyCounter.get(0) >= frequencyCounter.get(1);

    if (Boolean.TRUE.equals(toLowerCase)) {
      return str.toLowerCase();
    }

    return str.toUpperCase();
  }

  public static void main(String[] args) {
    String str = "HEHEHEHe";

    System.out.println(solve(str));
  }
}

// I need to learn the built in Java Functions and stop thinking
// like JavaScript lol.