function solution(n) {
  var answer = 0;

  //결국 약수의 갯수를 구하는 문제
  for (i = 1; i <= n; i++) {
    //나머지가 0인 값인 경우 +1
    if (n % i === 0) {
      answer++;
    }
  }

  return answer;
}
