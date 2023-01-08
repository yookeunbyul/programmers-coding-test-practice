function solution(n) {
  //1)
  var answer = [];
  for (i = 1; i <= n; i++) {
    if (i * i === n) {
      answer.push(i);
    }
  }
  return answer.length > 0 ? 1 : 2;

  //2)
  //Math.sqrt(자연수) : 루트값 구하기
  //루트값이 정수가 아닌 값이 나오기 때문에 Number.isInteger()로
  //정수인지 아닌지 값 반환(t/f)
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;

  //3)
  //1로 나눴을 때 나머지가 0이면 자연수
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
