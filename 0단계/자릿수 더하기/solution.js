function solution(n) {
  //문자열로 변환
  var str = String(n);
  //[...str] = str.split("");
  //문자열 배열을 만든 후 숫자 배열로 변환
  var arr = [...str].map((n) => Number(n));
  //각 자리 숫자의 합
  var answer = arr.reduce((a, b) => a + b);
  return answer;
}
