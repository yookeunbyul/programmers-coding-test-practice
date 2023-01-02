function solution(numbers) {
  // var max = Math.max(...numbers);
  // var smallNum = numbers.filter(n => n < max);
  // var secondeMax = Math.max(...smallNum);
  // return max * secondeMax;

  //내림차순 정렬
  var answer = numbers.sort((a, b) => b - a);
  return answer[0] * answer[1];
}
