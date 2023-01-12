function solution(my_string, num1, num2) {
  var answer = [...my_string];

  // 맞교환
  // let tmp = answer[num1];
  // answer[num1] = answer[num2];
  // answer[num2] = tmp
  // return answer.join("");

  // 구조분해
  [answer[num1], answer[num2]] = [answer[num2], answer[num1]];
  return answer.join("");
}
