function solution(n) {
  var answer = n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
  return answer;
}
