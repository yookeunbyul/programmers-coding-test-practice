function solution(n) {
  let answer = "";

  for (i = 1; i <= n; i++) {
    //i%2 === 1이면 홀수이고, 1이 true이므로 i%2는 true가 된다
    answer += i % 2 ? "수" : "박";
  }

  return answer;
}
