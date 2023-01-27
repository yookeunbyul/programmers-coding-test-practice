function solution(num_list, n) {
  var length = num_list.length / n;
  var answer = [];
  for (i = 1; i <= length; i++) {
    //slice() : 배열 복사본을 사용. 원본 배열 사용 X
    //splice() : 원본 배열 자체를 사용.
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
