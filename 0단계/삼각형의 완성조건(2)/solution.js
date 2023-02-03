function solution(sides) {
  //2,6,11가 가장 큰 변이거나 나머지가 가장 큰 변.
  //1 + a > 2 => a = 2
  //3 + a > 6 => a = 4,5,6
  //3 + 6 > b => b = 7,8
  //7 + a > 11 => a = 5,6,7,8,9,10,11
  //7 + 11 > b => b = 12,13,14,15,16,17

  let answer = [];
  let max = Math.max(...sides);
  let min = Math.min(...sides);
  let sum = max + min;

  for (i = 1; i <= max; i++) {
    if (min + i > max) {
      answer.push(i);
    }
  }

  for (i = max + 1; i <= sum; i++) {
    if (max + min > i) {
      answer.push(i);
    }
  }

  return answer.length;
}
