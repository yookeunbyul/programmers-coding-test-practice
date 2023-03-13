function solution(x) {
  //x의 자릿수의 합으로 x가 나누어져야 합니다.
  //하샤드 수면 t, 아니면 f

  const sum = [...String(x)].reduce((a, b) => a + Number(b), 0);

  return x % sum === 0;
}
