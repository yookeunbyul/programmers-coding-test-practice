function solution(n) {
  //주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수는 같다
  let stack = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      stack.push(i);
    }
  }

  return stack.filter((v) => v % 2 === 1).length;
}
