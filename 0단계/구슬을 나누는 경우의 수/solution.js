//조건1. 팩토리얼은 내림차순으로 계산
//조건2. BigInt 사용하기(BigInt는 BigInt끼리 연산 가능)
//BigInt : Number가 나타낼 수 있는 최댓값인  2^53 - 1 보다 큰 정수를 표현할 수 있는 내장 객체

function fact(n) {
  let num = BigInt(1);

  for (i = BigInt(n); i >= 1; i--) {
    num *= BigInt(i);
  }

  return num;
}

function solution(balls, share) {
  return fact(balls) / (fact(balls - share) * fact(share));
}
