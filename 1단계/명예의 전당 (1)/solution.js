function solution(k, score) {
  //상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념
  //매일 "명예의 전당"의 최하위 점수를 발표합니다

  //매일 발표된 명예의 전당의 최하위 점수를 return

  let stack = [];
  let answer = [];

  const l = score.length;

  for (let i = 0; i < l; i++) {
    if (stack.length === k) {
      stack.push(score.shift());
      stack.sort((a, b) => a - b);
      stack.shift();
      answer.push(stack[0]);
    } else {
      stack.push(score.shift());
      stack.sort((a, b) => a - b);
      answer.push(stack[0]);
    }
  }

  return answer;
}
