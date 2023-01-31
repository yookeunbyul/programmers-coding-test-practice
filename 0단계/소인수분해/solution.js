function solution(n) {
  let answer = [];
  //1은 소수 아님.
  //2로 나눠지면 계속 나누기
  //2로 나눠진다면 2는 소수이므로 정답 배열에 push.
  while (n % 2 === 0) {
    answer.push(2);
    n = n / 2;
  }

  //n의 제곱근보다 작은 수에서 약수가 없으면 큰 값도 없으므로
  //루트 n까지 for문을 돌린다.
  //이미 2배수는 위에서 다 돌렸으므로 3부터 2씩 증가.
  //i로 나눠지면 계속 나누기
  for (i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      answer.push(i);
      n = n / i;
    }
  }

  //n이 소수인 경우 처리
  if (n > 2) {
    answer.push(n);
  }

  //중복 방지를 위해 배열을 set객체로 바꾼 후
  //다시 배열로 반환해준다.
  return [...new Set(answer)];
}
