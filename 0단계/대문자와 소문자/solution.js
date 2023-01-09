function solution(my_string) {
  var answer = "";
  //for ...of로 문자 하나하나 반복
  for (let i of my_string) {
    //문자가 대문자라면
    if (i === i.toUpperCase()) {
      //소문자로 변환해 문자열로 붙인다
      answer += i.toLowerCase();
      //문자가 소문자라면 대문자로 변환해 문자열로 붙인다
    } else answer += i.toUpperCase();
  }
  return answer;
}
