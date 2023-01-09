function solution(n, t) {
  //n => n * 2 => (n * 2) * 2 => ((n * 2) * 2) * 2 => ...
  //n => n * 2 => n * 4 => n * 8 => n * 16 => n * 32 => ... => n * 1024(2의 10승)
  //Math.pow() : 제곱값 구하기
  var answer = Math.pow(2, t) * n;
  return answer;
}
