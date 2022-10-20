function isValidWalk(walk) {
  // length validation
  if (walk.length !== 10) {
    return false;
  }
  // coordinates
  const coords = {
    x: 0,
    y: 0,
  };

  walk.forEach((direction) => {
    switch (direction) {
      case "n":
        coords.y++;
        break;
      case "s":
        coords.y--;
        break;
      case "w":
        coords.x++;
        break;
      case "e":
        coords.x--;
        break;
    }
  });

  // final validation. If the coordinates are 0,0, then the walk is valid
  if (!coords.y && !coords.x) {
    return true;
  } else {
    return false;
  }
}
