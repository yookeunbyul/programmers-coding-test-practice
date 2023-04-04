function solution(X, Y) {
  let string = "";

  //0~9를 기준으로 카운트를 세고
  //카운트가 x와 y 둘다 0이 아니면 짝이 있는 것이기 때문에
  //작은 카운트를 골라 repeat해주면 X, Y의 짝꿍을 return 할 수 있다.

  let xnumber = Array.from(new Array(10), (_, i) => 0);
  const x = [...X];

  for (const num of x) {
    xnumber[num]++;
  }

  let ynumber = Array.from(new Array(10), (_, i) => 0);
  const y = [...Y];

  for (const num of y) {
    ynumber[num]++;
  }

  for (let i = 0; i < 10; i++) {
    if (xnumber[i] !== 0 && ynumber[i] !== 0) {
      let xnum = xnumber[i];
      let ynum = ynumber[i];

      string += String(i).repeat(Math.min(xnum, ynum));
    }
  }

  const answer = string
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");

  if (answer === "") {
    return "-1";
  }

  if (Number(answer) === 0) {
    return "0";
  }

  return answer;
}
