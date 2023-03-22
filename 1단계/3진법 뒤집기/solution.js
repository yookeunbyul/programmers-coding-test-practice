function solution(n) {
  //10진법을 3진법으로 만들고 뒤집은 다음에 10진법으로 표현
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
