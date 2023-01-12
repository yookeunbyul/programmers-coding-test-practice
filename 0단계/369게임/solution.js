function solution(order) {
  var answer = 0;
  //[3]
  //[2, 9, 4, 2, 3]
  var arr = [...String(order)].map(Number);
  var game = [3, 6, 9];
  arr.map((i) => {
    game.map((j) => {
      if (i === j) {
        answer++;
      }
    });
  });
  return answer;
}
