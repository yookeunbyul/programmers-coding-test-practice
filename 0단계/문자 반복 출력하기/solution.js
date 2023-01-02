function solution(my_string, n) {
  var words = [...my_string];
  //repeat(반복 count) 함수는 주어진 문자열을 옵션의 count만큼 반복하여 붙인 다음에 새로운 문자열로 반환.
  var answer = words.map((word) => word.repeat(n));
  return answer.join("");
}
