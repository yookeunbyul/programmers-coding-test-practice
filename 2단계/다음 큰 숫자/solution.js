function solution(n) {
  //2진수로 변환했을 때 1의 갯수가 같습니다.
  const one = [...n.toString(2)].filter((v) => v === "1").length;
  let bigger = n + 1;

  while ([...bigger.toString(2)].filter((v) => v === "1").length !== one) {
    bigger++;
  }

  return bigger;
}
