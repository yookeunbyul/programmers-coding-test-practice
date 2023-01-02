function solution(my_string, letter) {
  var word = [...my_string];
  var answer = word.filter((n) => n !== letter).join("");
  return answer;
}
