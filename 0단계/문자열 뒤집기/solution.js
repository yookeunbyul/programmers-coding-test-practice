function solution(my_string) {
  //split은 문자열을 나누어 배열로 만들고,
  //reverse는 배열을 뒤집고,
  //join은 배열의 원소를 합쳐 문자열로 만든다.
  // var answer = my_string.split("").reverse().join("");
  var answer = [...my_string].reverse().join("");
  return answer;
}
