function solution(str1, str2) {
  //String.includes() : 문자열이 특정 문자열을 포함하는지 확인하는 메서드.
  var answer = str1.includes(str2) ? 1 : 2;
  return answer;
}
