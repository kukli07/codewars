package com.timemir.codewars.kyu7;

import java.util.HashMap;
import java.util.Map;

public class isogram {
  public static boolean isIsogram(String str) {
    String[] chars = str.toLowerCase().split("");
    Map<String, Integer> occurrences = new HashMap<>();

    for (String c : chars) {
      if (occurrences.get(c) != null) {
        return false;
      } else {
        occurrences.put(c, 1);
      }
    }

    return true;
  }

  public static void main(String[] args) {
    String test = "Dermatoglyphics";
    System.out.println(isIsogram(test));
  }
}

// TIL: There are so many string methods I need to learn.

// TIL: There are many different interfaces,
// one being Iterable->Collection->List->ArrayList
// the equivalent to the JavaScript Array.