function solution(emergency) {
  //복사 후 내림차순으로 정렬
  //[3, 76, 24] => [76, 24, 3]
  let arr = [...emergency].sort((a, b) => b - a);
  //정렬한 배열의 인덱스로 기존 응급도 배열을 바꿔준다.
  //인덱스는 0부터이므로 +1 해줘야한다.
  return emergency.map((n) => arr.indexOf(n) + 1);
}
