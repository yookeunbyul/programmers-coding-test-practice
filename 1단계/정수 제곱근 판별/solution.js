function solution(n) {
  const num = Math.sqrt(n);

  //1로 나눴을 때 나머지가 0이면 정수
  if (num % 1 === 0) {
    return Math.pow(num + 1, 2);
  } else {
    return -1;
  }
}
