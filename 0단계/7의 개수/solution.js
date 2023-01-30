function solution(array) {
  var answer = array.join("").split("");
  return answer.map(Number).filter((n) => n === 7).length;
}
