function solution(a, b) {
  //최대공약수 구하기
  let gcd = 1;
  for (i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  //기약분수의 분모
  let num = b / gcd;

  //2와 5로 나눠질 때까지 계속 나눠준다.
  while (num % 2 === 0) {
    num = num / 2;
  }
  while (num % 5 === 0) {
    num = num / 5;
  }

  //만약 2와 5로 다 나눠져서 1이라면 유한소수이므로 1을 반환한다.
  return num === 1 ? 1 : 2;
}
