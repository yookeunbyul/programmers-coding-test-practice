function solution(keyinput, board) {
  let h = 0;
  let w = 0;
  let maxWidth = Math.floor(board[0] / 2);
  let maxHeight = Math.floor(board[1] / 2);

  for (key of keyinput) {
    switch (key) {
      case "left":
        if (w !== -maxWidth) w--;
        break;
      case "right":
        if (w !== maxWidth) w++;
        break;
      case "up":
        if (h !== maxHeight) h++;
        break;
      case "down":
        if (h !== -maxHeight) h--;
        break;
    }
  }

  return [w, h];
}
