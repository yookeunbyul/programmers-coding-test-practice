function solution(my_string) {
  //^는 부정. 1-9까지의 숫자가 아닌 문자를 제거
  var regex = /[^1-9]/g;
  //숫자만 남은 문자열을 반환
  var number = my_string.replace(regex, "");
  //문자열 배열으로 만든 후 .map(Number)로 숫자 배열로 변환
  //그 후 모든 자연수들의 합을 reduce()로 구한다.
  var answer = [...number].map(Number).reduce((a, b) => a + b);
  return answer;
}
