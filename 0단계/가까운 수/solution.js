function solution(array, n) {
  //n=10이고 [15,5]가 있다면 편차는 똑같이 5.
  //15가 먼저 탐색된다면 가장 가까운 수를 15로 반환하기 때문에
  //오름차순으로 먼저 정렬을 해줘야한다
  //Math.abs() : 절댓값 반환
  var answer = array.sort((a, b) => a - b).map((i) => Math.abs(i - n));
  var index = answer.indexOf(Math.min(...answer));
  return array[index];
}
