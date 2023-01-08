function solution(hp) {
  //Math.floor() 는 소수점 이하를 버림한다.
  var 장군개미 = Math.floor(hp / 5);
  //장군개미 값을 빼고 난 hp에서 병정개미 값을 구한다.
  var 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
  //일개미는 1이기 때문에 장군개미, 병정개미 뺀 값을 더해준다.
  var 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);

  return 장군개미 + 병정개미 + 일개미;
}
