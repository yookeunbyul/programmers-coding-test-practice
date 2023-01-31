function solution(bin1, bin2) {
  //정수는 10진수
  //parseInt('변환시키고자하는 문자열', 해당 수의 진수)
  //2진수를 10진수로 변환하여 더한다.
  var answer = parseInt(bin1, 2) + parseInt(bin2, 2);
  //10진수끼리 더한 값을 2진수로 변환
  //어떤 수를.toString(몇진수로 변환하고 싶은지)
  return answer.toString(2);
}
