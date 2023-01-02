function solution(numbers, num1, num2) {
  //end index의 값은 잘라낼 배열에 포함되지 않습니다.
  var answer = numbers.slice(num1, num2 + 1);
  return answer;
}
