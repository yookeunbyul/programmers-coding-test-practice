function solution(n, numlist) {
  //조건의 true인 값만 담긴 배열 반환
  var answer = numlist.filter((num) => num % n === 0);
  return answer;
}
