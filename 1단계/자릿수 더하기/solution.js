function solution(n) {
  //문자열로 변환 후 한자리씩 쪼개고
  const array = String(n).split("");

  //숫자로 변환 해 배열의 합을 구한다.
  return array.reduce((a, b) => a + Number(b), 0);
}
