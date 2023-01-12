function solution(my_string) {
  //Javascript에서 Set 객체는 중복 없는 데이터를 표현한다.
  //[...new Set(string)]
  //👉 이 코드는 string이 배열 안에 하나씩 들어가게 해준다.
  //마치 sting.split('')이랑 비슷하지만 중복이 제거된 상태이다.
  var answer = [...new Set(my_string)];
  return answer.join("");
}
