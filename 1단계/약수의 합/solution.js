function solution(n) {
  //n의 약수를 구한 후 모두 더한 값을 return
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}
