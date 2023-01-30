function solution(my_string) {
  //문자열을 ' '(공백)으로 대체 후 trim()으로 왼쪽, 오른쪽 공백 제거
  //공백을 기준으로 자르고 문자열을 숫자로 변경
  //공백은 숫자로 변경 시 0이 된다.
  //reduce로 총합을 구한다.
  var answer = my_string.replace(/[a-z]/gi, " ").trim();
  return answer
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b);
}
