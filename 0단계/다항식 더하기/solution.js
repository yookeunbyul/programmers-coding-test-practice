function solution(polynomial) {
  let poly = polynomial.split(" + ");
  let xnum = 0;
  let num = 0;

  for (p of poly) {
    if (p.includes("x")) {
      //Number("x".split("x")[0]) = 0
      //"x".split("x") => ["",""]
      xnum += Number(p.split("x")[0]);
    }
    if (p === "x") {
      xnum++;
    }
    //상수면
    if (!p.includes("x")) {
      num += Number(p);
    }
  }

  let answer = [];

  if (xnum) {
    //계수가 1이면
    if (xnum === 1) {
      xnum = `x`;
      answer.push(xnum);
    } else {
      xnum = `${xnum}x`;
      answer.push(xnum);
    }
  }

  //상수가 0이 아닐때만
  if (num !== 0) {
    answer.push(num.toString());
  }

  return answer.join(" + ");
}
