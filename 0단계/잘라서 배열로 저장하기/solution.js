function solution(my_str, n) {
  //반올림
  let length = Math.ceil(my_str.length / n);
  let str = [...my_str];
  let answer = [];
  for (i = 0; i < length; i++) {
    answer.push(str.splice(0, n).join(""));
  }

  return answer;
}
