function solution(score) {
  //평균으로 배열 다시 반환
  let avg = score.map((sc) => sc.reduce((a, b) => a + b) / 2);
  //내림차순으로 반환
  let sortAvg = [...avg].sort((a, b) => b - a);
  return avg.map((n) => sortAvg.indexOf(n) + 1);
  //avg: 75,70,55,65 / 75,75,40,95,95,100,20
  //sortAvg: 75,70,65,55 / 100,95,95,75,75,40,20
}
