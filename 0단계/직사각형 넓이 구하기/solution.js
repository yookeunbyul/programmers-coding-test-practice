function solution(dots) {
  //pop(): 맨 끝에 값 제거 후 반환
  //shift(): 맨 앞에 값 제거 후 반환
  //let max = [...dots].sort().pop();
  //let min = [...dots].sort().shift();

  //let w = max[0] - min[0];
  //let h = max[1] - min[1];

  //return Math.abs(w*h);

  let x = [];
  let y = [];

  for (d of dots) {
    x.push(d[0]);
    y.push(d[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
