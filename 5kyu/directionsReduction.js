function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    try {
      if (
        (arr[i].toLowerCase() === "north" &&
          arr[i + 1].toLowerCase() === "south") ||
        (arr[i].toLowerCase() === "south" &&
          arr[i + 1].toLowerCase() === "north") ||
        (arr[i].toLowerCase() === "east" &&
          arr[i + 1].toLowerCase() === "west") ||
        (arr[i].toLowerCase() === "west" && arr[i + 1].toLowerCase() === "east")
      ) {
        // remove the elements at index i and i+1
        arr.splice(i, 2);
        i = -1;
      }
    } catch (error) {
      // if the index is out of bounds, do nothing
    }
  }
  return arr;
}
