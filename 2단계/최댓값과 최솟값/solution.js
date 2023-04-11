function solution(s) {
  let answer = [];
  const array = s.split(" ").map(Number);

  answer.push(Math.min(...array));
  answer.push(Math.max(...array));

  return answer.join(" ");
}
