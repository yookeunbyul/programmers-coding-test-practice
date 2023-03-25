function solution(t, p) {
  let answer = 0;

  //1: 0에서 4까지 총 다섯번
  //2: 0에서 7까지 총 여덟번
  //3: 0에서 3까지 총 네번
  //=> 그래서 t.length - p.length까지 돌리면 됨
  for (let i = 0; i <= t.length - p.length; i++) {
    //string.substr(i, n) => i번 인덱스에서부터 n개 추출
    let sliced = t.substr(i, p.length);
    if (Number(p) >= Number(sliced)) answer++;
  }

  return answer;
}
